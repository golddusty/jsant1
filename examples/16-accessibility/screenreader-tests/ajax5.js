window.onload = function()
{
  var trigger = document.getElementById('trigger');
  var response = document.getElementById('response');

  trigger.onclick = function()
  {
    var request = null;
    if (typeof window.ActiveXObject != 'undefined')
    {
      try { request = new ActiveXObject('Microsoft.XMLHTTP'); }
      catch (err) { request = null; }
    }
    else if (typeof window.XMLHttpRequest != 'undefined')
    {
      request = new XMLHttpRequest();
    }

    if(request != null)
    {
      request.onreadystatechange = function()
      {
        if (request.readyState == 4
            && /^(200|304)$/.test(request.status.toString()))
        {
          response.value = request.responseText;
          response.focus();
        }
      }

      request.open('GET', 'test.php?msg=Hello+World', true);
      request.send(null);
    }

    return false;
  };
};
