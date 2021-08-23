const hello = prompt("Кто там?")
const pass = "Пароль?"
const dn = "Я вас не знаю"
const admin = "Админ"

if (hello === admin) prompt(pass)
else if (hello == null) alert("Отменено")

else {
  alert(dn)
}
/* if (pass === "Я") alert("Здравствуйте!")
if (pass === null) alert("Отменено")
else {alert(no)
} */
const pp = "Я"
const hi = "Здравствуйте!"
const no = "Неверный пароль"
if (pass === pp) alert(hi)
else if (pass == null) alert("Отменено")
else {
  alert(no)
}