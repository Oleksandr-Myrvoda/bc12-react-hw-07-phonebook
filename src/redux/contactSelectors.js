import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

// const getFilteredContacts = (state) => {
//   const filter = getFilter(state);
//   const contacts = getAllContacts(state);

//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const getMemoizedFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export {
  getLoading,
  getFilter,
  getAllContacts,
  // getFilteredContacts,
  getMemoizedFilteredContacts,
};
