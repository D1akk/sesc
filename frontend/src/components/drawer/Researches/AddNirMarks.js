import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "@mui/base/Input";
import Select from "react-select";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "student",
    header: "ФИО обучающегося",
  },
  {
    accessorKey: "research_title", //access nested data with dot notation
    header: "Тема проекта",
  },
  {
    accessorKey: "teacher",
    header: "ФИО руководителя",
  },
  {
    accessorKey: "points1",
    header: "Количество баллов на конференции Чтения СУНЦ",
  },
  {
    accessorKey: "points2",
    header:
      "Дополнительные баллы за участие в научных мероприятиях регионального, всеросс. и межд. уровня",
  },
  {
    accessorKey: "score",
    header: "Сумма баллов",
  },
  {
    accessorKey: "mark",
    header: "Оценка научного руководителя направления",
  },
];
const csvOptions = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};
const csvExporter = new ExportToCsv(csvOptions);

const example_data = [
  {
    fullname: "Иванов Иван Иванович",
    research:
      "Исследование влияние механоактивации базальтовых волокон на адгезионные характеристики полимерных композиционных материалов",
    teacher: "Соколов С.В, студент 3 курса ИЕН СВФУ",
    this_conference: 18,
    conferences: 0,
    result: 18,
    teacher_mark: "4 / хорошо",
  },
];

export const AddNirMarks = () => {
  const navigate = useNavigate();
  const [existResearches, setExistResearches] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedRes, setSelectedRes] = useState("");
  const [selected, setSelected] = useState(true);
  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [result, setResult] = useState();
  const [selectedStudentResearches, setSelectedStudentResearches] = useState();
  const [existConferences, setExistConferences] = useState([]);
  const [selectedConference, setSelectedConference] = useState();
  const [conferenceRange, setConferenceRange] = useState();
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [total, setTotal] = useState(point1 + point2);
  const [reportList, setReportList] = useState([]);
  const [existTeachers, setExistTeachers] = useState([]);

  const handleExportData = () => {
    csvExporter.generateCsv(example_data);
  };

  const handleChangeStudent = (e) => {
    setSelectedStudent(e.value);
    setStudentName(e.label);
    setSelectedStudentResearches(getStudentResearch(selectedStudent));
    setSelected(false);
  };

  const handleChangeConference = (e) => {
    setSelectedConference(e.label);
    setConferenceRange(e.value);
  };

  const handleChangeResult = (e) => {
    setResult(e.target.value);
    if (result === "top" && conferenceRange === "high") setPoint2(+10);
    if (
      (result === "player" && conferenceRange === "high") ||
      (result === "top" && conferenceRange === "middle")
    )
      setPoint2(+7);
    if (
      (result === "player" && conferenceRange === "middle") ||
      (result === "top" && conferenceRange === "low")
    )
      setPoint2(+5);
    if (result === "player" && conferenceRange === "low") setPoint2(+3);
    setTotal(point1 + point2);
  };

  const options_researches = selectedStudentResearches;

  const handleSumbit = (e) => {
    e.preventDefault();
    addNirData();
  };

  const addNirData = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/sesc/report-add/",
      headers: { "Content-Type": "application/json" },
      data: {
        student: studentName,
        research_title: selectedRes,
        teacher: teacherName,
        points1: point1,
        points2: point2,
        score: total,
        mark:
          total < 10
            ? "2 / неудовлетворительно"
            : total >= 10 && total <= 13
            ? "3 / удовлетворительно"
            : total >= 14 && total <= 17
            ? "4 / хорошо"
            : total >= 18
            ? "5 / отлично"
            : "",
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/student-list/"
      );
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchResearches = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/research-list/"
      );
      setExistResearches(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchConferences = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/conference-list/"
      );
      setExistConferences(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReports = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/report-list/"
      );
      setReportList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/teacher-list/"
      );
      setExistTeachers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const options_students = students.map(function (student) {
    return {
      value: student.id,
      label: student.surname + " " + student.name + " " + student.patronimyc,
    };
  });

  const options_conferences = existConferences.map(function (conference) {
    return {
      value: conference.conference_range,
      label: conference.title,
    };
  });

  const getStudentResearch = (student_id) => {
    let choicedStudent = students.filter(
      (student) => student.id === student_id
    );
    const arr = [];
    let choicedStudentResearches = choicedStudent.map((obj) => obj.researches);
    choicedStudentResearches.map(function (row) {
      row.map(function (research) {
        setTeacherId(research.teacher);
        arr.push({ value: research.id, label: research.title });
      });
    });
    existTeachers.map(function (res) {
      if (res.teacher_id === teacherId)
        setTeacherName(res.surname + " " + res.name + " " + res.patronymic);
    });

    console.log(existTeachers);
    console.log(teacherName);
    return arr;
  };

  useEffect(() => {
    fetchStudents();
    fetchResearches();
    fetchConferences();
    fetchReports();
    fetchTeachers();
  }, []);

  return (
    <>
      {localStorage.getItem("secretar") ? (
        <div className="add-marks">
          <h2>Добавление оценок НИР обучающихся</h2>
          <hr></hr>
          <div className="nir-marks">
            <form className="marks-form-container">
              <label>Список обучающихся</label>
              <Select
                options={options_students}
                className="select-marks-page"
                placeholder="Студент"
                classNamePrefix="lp-copy-sel"
                onChange={handleChangeStudent}
              />
              <label>Список НИР обучающегося</label>
              <Select
                isDisabled={selected}
                options={options_researches}
                placeholder="Название научной работы"
                classNamePrefix="lp-copy-sel"
                className="select-marks-page"
                onChange={(e) => setSelectedRes(e.label)}
              />
              <label>Баллы за конференцию "Чтения СУНЦ"</label>
              <Input
                placeholder="Type something…"
                onChange={(e) => setPoint1(+e.target.value)}></Input>
              <label>Список других конференций</label>
              <Select
                isDisabled={selected}
                options={options_conferences}
                placeholder="Название конференции"
                classNamePrefix="lp-copy-sel"
                className="select-marks-page"
                onChange={handleChangeConference}
              />

              <label>
                Дополнительные баллы за участие в конференции:{" "}
                {selectedConference}
              </label>
              <select value={result} onChange={handleChangeResult}>
                <option value="top">Победитель, призер</option>
                <option value="player">Участник</option>
              </select>
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  height: "50px",
                  marginTop: "10px",
                  backgroundColor: "#1976d2",
                }}
                onClick={handleSumbit}>
                Выставить оценки и баллы обучающемуся
              </Button>
              <p>
                Данные, после выставления оценок и баллов обучающемуся, появятся
                в таблице.
              </p>
            </form>
            <h2>Генерация отчета</h2>
            <label>Таблица</label>
            <MaterialReactTable
              columns={columns}
              data={reportList}
              enableRowSelection
              positionToolbarAlertBanner="bottom"
              renderTopToolbarCustomActions={({ table }) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    p: "0.5rem",
                    flexWrap: "wrap",
                  }}>
                  <Button
                    color="primary"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                    variant="contained">
                    Export All Data
                  </Button>
                </Box>
              )}
            />
          </div>
        </div>
      ) : (
        navigate("/404")
      )}
    </>
  );
};
