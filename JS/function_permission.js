//Функция, которая собирает данные с человека
function person(name, surname, passport, national_passport) {
  const  personData = {
    name,
    surname,
    passport,
    national_passport
  }
  return personData
};
const dataPersonOne = person('Evgeniy', 'Ivanov', true, true);
const dataPersonTwo = person('Ivan', 'Ivanov', true, false);

//Граница с Беларусью
//Требуется паспорт РФ или загранпаспорт
function permissionDepartBelarus(dataPerson) {
  let a = (dataPerson.passport === true || dataPerson.national_passport === true);
  if (a === true) {
    console.log(dataPerson.name + ' ' + dataPerson.surname + ' - Въезд на территорию Беларуси разрешен!')
  } else {
    console.log(dataPerson.name + ' ' + dataPerson.surname + ' - Въезд на территорию Беларуси не разрешен!')
  }
  return('Статус не выявлен!')
}
permissionDepartBelarus(dataPersonOne);
permissionDepartBelarus(dataPersonTwo);

//Въезд в ОАЭ через Беларусь
//Требуется паспорт РФ и загранпаспорт
function permissionDepartOAE(dataPerson) {
  let a = ((dataPerson.passport === true) && (dataPerson.national_passport === true));
  if (a === true) {
    console.log(dataPerson.name + ' ' + dataPerson.surname + ' - Полный комплект документов!')
  } else {
    console.log(dataPerson.name + ' ' + dataPerson.surname + ' - Не хватает документа для путешествия!')
  }
  return('Статус не выявлен!')
}
permissionDepartOAE(dataPersonOne);
permissionDepartOAE(dataPersonTwo);


