const setUrl = (searchValue, searchType = "searchTypeUndefined") => {
  const url = new URL("https://www.googleapis.com/customsearch/v1?");
  let params = {
    q: searchValue,
    key: process.env.REACT_APP_API_KEY,
    cx: process.env.REACT_APP_CX,
    searchType,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return url.href;
};

export default setUrl;
