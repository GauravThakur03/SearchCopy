import defaultData from "./defaultdata";

export const fakeFetch = (url) => {
  console.log("THE URL::" + url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case "localjson?query=mowers&binning-state=country_site==en_NA":
          resolve(defaultData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acountry_site==en_NA":
          console.log("Combines and headers data");
          //resolve(defaultData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acategory==Commercial%20mowers%0Acountry_site==en_NA":
          console.log("combination of two product categories data");
          //resolve(defaultData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acategory==Commercial%20mowers%0Asub_type==Attachment%0Acountry_site==en_NA":
          console.log("combination of two product categories and attachments data");
          //resolve(defaultData);
          break;
      }
    }, 100);
  });
};
