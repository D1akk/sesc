import React, { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const AboutUs = () => {
  return (
    <div className="home">
      <div>
        <h1>Специализированный учебно-научный центр</h1>
        <div className="text-content">
          <p>
            Университетский лицей СВФУ приглашает Вас для поступления в 10 класс
            на 2023-2024 учебный год по следующим профилям:
            <br /> - «Физико-технический»; <br />- «Математика и IT»; -
            «Химико-технологический»; <br />- «Биолого-экологический»; <br />-
            «Лингвистический». <br />
            Для поступления в СУНЦ СВФУ необходимо с 27 марта по 16 июня 2023 г.
            подать заявку на участие в мероприятии{" "}
            <a href="https://leader-id.ru/events/413805">
              https://leader-id.ru/events/413805
            </a>{" "}
            и предоставить следующие документы в приемную комиссию: <br />
            а) личное заявление от родителей (в форме установленного образца);{" "}
            <br />
            б) копию паспорта ребенка (стр. 2,3,5) или свидетельства о рождении,
            в случае если ребенок еще не получил паспорт); <br />
            в) справку из школы об обучении, заверенную подписью директора и
            печатью образовательной организации;
            <br /> г) согласие на обработку персональных данных; <br />
            д) фотографии 3*4 — 6 шт. Вступительные испытания проходят в два
            этапа:
            <br /> - Первый этап – экзамены по двум профильным предметам
            (письменный экзамен, устное собеседование по индивидуальному
            графику) и зачёт по непрофильным предметам; <br />- Второй этап –
            собеседование с претендентами на поступление и их родителями
            (законными представителями). Необходимо предоставить портфолио
            претендента за 7 – 9 классы. <br />
            По всем интересующим вопросам рады ответить: <br />
            по телефону: +79245655181 (только Whatsapp); <br />
            по электронной почте: sunts_svfu@yandex.ru <br />
            <br />
            Адрес: г. Якутск, ул. Кулаковского, 48 (КФЕН), 3 этаж, кабинет №
            355А
          </p>
        </div>
      </div>
    </div>
  );
};

function createData(name, property) {
  return { name, property };
}

const rows = [
  createData("Директор", "Федотова Милана Егоровна"),
  createData("Сокращённое наименование", "СУНЦ СВФУ"),
  createData(
    "Юридический адрес",
    "677000, Республика Саха (Якутия), город Якутск, улица Белинского, дом 58"
  ),
  createData(
    "Местонахождение ",
    "677000, Республика Саха (Якутия), город Якутск, улица Кулаковского, дом 48"
  ),
  createData("Телефон:", "+7 (4112) 49-66-49 +7 (4112) 49-68-75"),
  createData("E-mail:", "sunts_svfu@mail.ru, sunts-svfu@yandex.ru"),
  createData("Форма обучения", "Очная"),
  createData("Нормативный срок обучения", "Среднее общее образование — 2 года"),
  createData("Язык обучения и воспитания", "Русский"),
  createData("Численность учащихся (на 01.02.2023)", "143"),
  createData("Численность учителей", "62"),
  createData(
    "График и режим работы",
    "Рабочие дни: понедельник — суббота Часы работы: с 08:00 до 17:25 Перерыв (обед): с 13.15 до 14.00 Выходной день — воскресенье"
  ),
];

export const OurAim = () => {
  return (
    <div className="home">
      <div>
        <h2>О СУНЦ</h2>
        <div className="text-content">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="about-sesc-table">
              <TableHead>
                <TableRow>
                  <TableCell>Полное официальное название</TableCell>
                  <TableCell align="left">
                    Специализированный учебно-научный центр – Университетский
                    лицей федерального государственного автономного
                    образовательного учреждения высшего образования
                    "Северо-Восточный федеральный университет имени М. К.
                    Аммосова"
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.property}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div className="home">
      <h1>GeeksforGeeks Vision</h1>
    </div>
  );
};
