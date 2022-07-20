export const getData = async( id ) => {
  const url = `https://www.breakingbadapi.com/api/quotes/${id}`;
  const resp = await fetch( url );

  return resp;
}