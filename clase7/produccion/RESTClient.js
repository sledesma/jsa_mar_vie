const RESTClient = {};

/*
/clients
  GET (Read / Listado)
  POST (Create / Alta)
  PUT (Update / Modificacion)
  DELETE (Delete / Baja)
*/
RESTClient.getAll = async function(endpoint) {
  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
}

RESTClient.getOne = async function(endpoint, id) {
  const res = await fetch(endpoint + '/' + id);
  const json = await res.json();
  return json;
}

RESTClient.post = async function(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  const json = await res.json();
  return json;
}

RESTClient.put = async function(endpoint, id, data) {
  const res = await fetch(endpoint + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  const json = await res.json();
  return json;
}

RESTClient.delete = async function(endpoint, id) {
  const res = await fetch(endpoint + '/' + id,  {
    method: 'DELETE'
  });
  const json = await res.json();
  return json;
}