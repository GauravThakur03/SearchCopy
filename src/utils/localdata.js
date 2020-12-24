import {
  defaultData,
  oneProductTypeFilterData,
  twoProductTypesFilterData,
  twoProductTypesAndContentTypeFilterData,
  twoProductTypesAndContentTypeAndModelYearFilterData
} from "./defaultdata";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case "localjson?query=mowers&binning-state=country_site==en_NA":
          resolve(defaultData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acountry_site==en_NA":
          resolve(oneProductTypeFilterData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acategory==Commercial%20mowers%0Acountry_site==en_NA":
          console.log("combination of two product categories data");
          resolve(twoProductTypesFilterData);
          break;
        case "localjson?query=mowers&binning-state=category==Combines%20and%20headers%0Acategory==Commercial%20mowers%0Asub_type==Attachment%0Acountry_site==en_NA":
          console.log(
            "combination of two product categories and attachments data"
          );
          resolve(twoProductTypesAndContentTypeFilterData);
          break;
        case "localjson?query=mowers&binning-state=year==2020%0Acategory==Combines%20and%20headers%0Acategory==Commercial%20mowers%0Asub_type==Attachment%0Acountry_site==en_NA%0Ayear==All":
          console.log(
            "combination of two product categories and attachments data"
          );
          resolve(twoProductTypesAndContentTypeAndModelYearFilterData);
          break;
        default:
          resolve(defaultData);
      }
    }, 100);
  });
};
