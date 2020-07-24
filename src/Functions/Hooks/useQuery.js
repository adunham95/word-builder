import React from "react";

export function useQuery(){
    const urlParams = new URLSearchParams(window.location.search);
    let urlData = {}

    console.log(urlParams)

    urlParams.forEach(function(value, key) {
        urlData[key] = value;
      });

    return urlData
}