const xhr = new XMLHttpRequest();
xhr.onload = handleResponse;

function handleClick()
{
  const elementId = document.getElementById("content");
  elementId.textContent = xhr.response;

  xhr.open("GET", "http://localhost:3000/");
  xhr.send();
}

function handleResponse()
{
  if (xhr.readyState === 4)
  {
    const elementId = document.getElementById("content");
    elementId.textContent = xhr.response;
  }
}