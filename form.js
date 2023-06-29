let messageList = [
  {
    name: "Schmeichel",
    date: "1998-01-09",
    gender: "L",
    message: "Ini adalah pesan pertamaku",
  },
];

const resetForm = () => {
  document.getElementsByName("name")[0].value = "";
  document.getElementsByName("date")[0].value = "";
  document.getElementsByName("message")[0].value = "";
};

const getMessageList = () => {
  const tableContainer = document.getElementById("table-content");
  let tableContent = "";

  if (messageList.length <= 0) {
    tableContent = `<tr>
                        <td colspan='7' align='center'>(Kosong)</td>
                    </tr>`;
  }

  messageList.map((msg, i) => {
    tableContent += `<tr>
                        <td align='center'>${i + 1}</td>
                        <td>${msg.name}</td>
                        <td>${msg.date}</td>
                        <td>${
                          msg.gender == "L" ? "Laki-laki" : "Perempuan"
                        }</td>
                        <td>${msg.message}</td>
                        <td><a href="#">Lihat Profil</a></td>
                        <td align='center'><i class="fa-solid fa-trash-can delete" onClick='deleteMessage(${i})'></i></td>
                    </tr>`;
  });

  tableContainer.innerHTML = tableContent;
};

const setMessage = (param) => {
  messageList.push({
    name: param.name,
    date: param.date,
    gender: param.gender,
    message: param.message,
  });

  alert("Pesan Terkirim !");
  getMessageList();
  resetForm();
};

const deleteMessage = (id) => {
  messageList.splice(id, 1);
  alert("Pesan Terhapus !");
  getMessageList();
};

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const param = {
    name: document.getElementsByName("name")[0].value,
    date: document.getElementsByName("date")[0].value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    message: document.getElementsByName("message")[0].value,
  };

  if (!param.name || !param.date || !param.gender || !param.message) {
    return alert("Anda belum melengkapi form");
  }
  
  setMessage(param);
});

getMessageList();
