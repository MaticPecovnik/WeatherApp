const useDate = (date) => {
  // if no date is passed it is assumed that we want to get the date of today
  if (date === undefined) {
    const DATE = new Date();
    const dd = String(DATE.getDate()).padStart(2, "0");
    const mm = String(DATE.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = DATE.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  } else {
    const DATE = new Date(date);
    const dd = String(DATE.getDate()).padStart(2, "0");
    const mm = String(DATE.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = DATE.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  }
};

export default useDate;
