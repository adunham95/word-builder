export function useQuery(){
    const urlParams = new URLSearchParams(window.location.search);
    let urlData = {}
    urlParams.forEach(function(value, key) {
        urlData[key] = value;
      });

    return urlData
}