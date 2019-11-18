// export const headerURL = 'https://gsmpreview.tal.deere.com/sales/salesmanual/ssi';
// export const footerURL = 'https://gsmpreview.tal.deere.com/sales/salesmanual/ssi';
// export const searchResultsXmlURL = 'https://search.tal.deere.com/VSN/?';
// export const searchSettingXmlURL = 'https://gsmpreview.tal.deere.com/data/sales/salesmanual/templatedata/salesmanual/search_settings/data/';
// export const autoSuggestionsURL = 'https://search.deere.com/cgi-bin/velocity?v.app=autocomplete-json&v.function=autocomplete-collection&bag-of-words=true&filter=&dictionary=deere-ddc-xml-dictionary-autocomplete,deere-ddc-xml-product-autocomplete&num=10';

const api = '../../api/';
export const headerURL = `${api}/header.html`;
export const footerURL = `${api}/footer.html`;
export const searchResultsXmlURL = 'http://localhost:7000/loadXML?';
export const searchSettingXmlURL = api;
export const autoSuggestionsURL = 'https://search.deere.com/cgi-bin/velocity?v.app=autocomplete-json&v.function=autocomplete-collection&bag-of-words=true&filter=&dictionary=deere-ddc-xml-dictionary-autocomplete,deere-ddc-xml-product-autocomplete&num=10'; 