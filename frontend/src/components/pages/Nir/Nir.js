import { useState, useEffect, useMemo } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as Lk } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export const NirText = () => {
  return (
    <div className="django-body-left">
      <div className="breadcumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Lk underline="hover" color="inherit" to={"/"}>
            Главная страница
          </Lk>
          <Typography color="text.primary">Научные работы</Typography>
        </Breadcrumbs>
      </div>
      <h2 style={{ textAlign: "center" }}>Научно-исследовательские работы</h2>
      <hr></hr>
      <div>
        <Link
          className="section-link"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}>
          <p>Как школьнику выполнить научно-исследовательскую работу?</p>
        </Link>
        <Link
          className="section-link"
          to="section2"
          spy={true}
          smooth={true}
          duration={500}>
          <p>Как подготовиться к научной конференции?</p>
        </Link>
        <Link>
          <p>
            Как попасть на российскую и зарубежную конференцию высокого уровня?
          </p>
        </Link>
      </div>
      <hr></hr>

      <div id="section1" className="div-section">
        <h4 style={{ textAlign: "center" }}>Как выполнить исследование?</h4>
        <p>
          {" "}
          Перед началом исследования определитесь с тем, что Вы хотели бы
          изучить, то есть с областью исследования (физика, математика, и т.д.).
          Оцените имеющиеся у Вас ресурсы: кто будет Вашим руководителем и где
          Вы будете находить нужную Вам информацию (доступ к книгам, Интернету),
          каким оборудованием и вычислительной техникой Вы располагаете. После
          чего Вам необходимо выбрать тему исследования. Чем нужно
          руководствоваться при выборе темы? Выбор темы — это прерогатива
          руководителя работы, Вам её могут просто предложить. Соглашайтесь,
          руководитель обычно понимает, что из какой темы получится за то время,
          которым Вы располагаете. Но не поленитесь внимательно посмотреть
          примеры работ школьников, которые имеются на сайтах школьных
          конференций и на этом сайте: узнав, что смогли сделать Ваши ровесники,
          Вы лучше поймёте, что будет по силам Вам.{" "}
        </p>
        <p>
          Если Вы только начинаете исследование и в Вашем распоряжении нет
          близко расположенного университета, а есть только родная школа, Вам
          придётся в большей степени рассчитывать на свои силы и, если
          понадобится, наши консультации. Помните, что задача школьника — отнюдь
          не потрясти основы науки своим открытием (это Вы сделаете, окончив
          школу, университет и много поработав), а приобрести необходимые
          навыки, которые Вам так помогут в будущей профессиональной
          деятельности.
        </p>
        <p>
          Если Вы уже выполняете работу, то Вам нужно обратить особое внимание
          на две вещи. Во-первых, работа должна быть методически грамотной, а
          результаты — правильно обработанными (ну, например, если у Вас
          результаты представлены в виде графиков, то на них обязательно должны
          быть нанесены погрешности). Здесь Вам неоценимую помощь окажет Ваш
          руководитель. Вы также можете обращаться к нам с любыми вопросами.
          Во-вторых, Вам нужно выбрать конференцию, на которой Вы сможете
          представить Ваши результаты научному жюри и Вашим сверстникам, а также
          узнать, что их интересует в науке. Конференций проводится много и
          очень разного уровня. Постарайтесь быть честны перед самим собой и
          выступить не на той конференции, где раздают красивые дипломы всем
          подряд, а на той, где Вы сможете получить реальную оценку Вашей работы
          и, что важнее, доброжелательные замечания и рекомендации на будущее.
          Примеры работ наших учащихся Вы можете посмотреть перейдя по ссылкам в
          верхней части страницы.
        </p>
      </div>
      <div id="section2" className="div-section">
        <h4 style={{ textAlign: "center" }}>Новая секция</h4>
        <p>
          {" "}
          Перед началом исследования определитесь с тем, что Вы хотели бы
          изучить, то есть с областью исследования (физика, математика, и т.д.).
          Оцените имеющиеся у Вас ресурсы: кто будет Вашим руководителем и где
          Вы будете находить нужную Вам информацию (доступ к книгам, Интернету),
          каким оборудованием и вычислительной техникой Вы располагаете. После
          чего Вам необходимо выбрать тему исследования. Чем нужно
          руководствоваться при выборе темы? Выбор темы — это прерогатива
          руководителя работы, Вам её могут просто предложить. Соглашайтесь,
          руководитель обычно понимает, что из какой темы получится за то время,
          которым Вы располагаете. Но не поленитесь внимательно посмотреть
          примеры работ школьников, которые имеются на сайтах школьных
          конференций и на этом сайте: узнав, что смогли сделать Ваши ровесники,
          Вы лучше поймёте, что будет по силам Вам.{" "}
        </p>
        <p>
          Если Вы только начинаете исследование и в Вашем распоряжении нет
          близко расположенного университета, а есть только родная школа, Вам
          придётся в большей степени рассчитывать на свои силы и, если
          понадобится, наши консультации. Помните, что задача школьника — отнюдь
          не потрясти основы науки своим открытием (это Вы сделаете, окончив
          школу, университет и много поработав), а приобрести необходимые
          навыки, которые Вам так помогут в будущей профессиональной
          деятельности.
        </p>
        <p>
          Если Вы уже выполняете работу, то Вам нужно обратить особое внимание
          на две вещи. Во-первых, работа должна быть методически грамотной, а
          результаты — правильно обработанными (ну, например, если у Вас
          результаты представлены в виде графиков, то на них обязательно должны
          быть нанесены погрешности). Здесь Вам неоценимую помощь окажет Ваш
          руководитель. Вы также можете обращаться к нам с любыми вопросами.
          Во-вторых, Вам нужно выбрать конференцию, на которой Вы сможете
          представить Ваши результаты научному жюри и Вашим сверстникам, а также
          узнать, что их интересует в науке. Конференций проводится много и
          очень разного уровня. Постарайтесь быть честны перед самим собой и
          выступить не на той конференции, где раздают красивые дипломы всем
          подряд, а на той, где Вы сможете получить реальную оценку Вашей работы
          и, что важнее, доброжелательные замечания и рекомендации на будущее.
          Примеры работ наших учащихся Вы можете посмотреть перейдя по ссылкам в
          верхней части страницы.
        </p>
      </div>
    </div>
  );
};

const Nir = () => {
  const [researches, setResearches] = useState([]);
  const [selectedResearches, setSelectedResearches] = useState([]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetchResearches();
  }, []);

  const fetchResearches = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/sesc/research-list/"
      );
      //console.log(response.data);
      setResearches(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResearchSelect = (e) => {
    setSelectedResearches([e.value]);
  };
  console.log(localStorage.getItem("student_id"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/sesc/research-select/", {
        student_id: localStorage.getItem("student_id"),
        research_id: selectedResearches,
      });
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const optionsPhysics = researches
    .filter((row) => row.research_area === "physics")
    .map((filteredResearch) => ({
      value: filteredResearch.id,
      label:
        "Название: " +
        filteredResearch.title +
        " \nРуководитель: " +
        filteredResearch.teacher,
    }));
  const optionsMath = researches
    .filter((row) => row.research_area === "math")
    .map((filteredResearch) => ({
      value: filteredResearch.id,
      label:
        "Название: " +
        filteredResearch.title +
        " \nРуководитель: " +
        filteredResearch.teacher,
    }));
  const optionsBio = researches
    .filter((row) => row.research_area === "bio")
    .map((filteredResearch) => ({
      value: filteredResearch.id,
      label:
        "Название: " +
        filteredResearch.title +
        " \nРуководитель: " +
        filteredResearch.teacher,
    }));
  const optionsChemistry = researches
    .filter((row) => row.research_area === "chemistry")
    .map((filteredResearch) => ({
      value: filteredResearch.id,
      label:
        "Название: " +
        filteredResearch.title +
        " \nРуководитель: " +
        filteredResearch.teacher,
    }));
  const optionsLanguage = researches
    .filter((row) => row.research_area === "language")
    .map((filteredResearch) => ({
      value: filteredResearch.id,
      label:
        "Название: " +
        filteredResearch.title +
        " \nРуководитель: " +
        filteredResearch.teacher,
    }));

  return (
    <div className="home">
      <NirText />
      {localStorage.getItem("userStudent") === "true" ? (
        <>
          <div className="researches">
            <h2>Темы НИР для выбора:</h2>
            <label>Физико-технический:</label>
            <div className="select-research">
              <Select
                options={optionsPhysics}
                placeholder="Название научной работы"
                maxMenuHeight={400}
                className="react-select-container"
                classNamePrefix="lp-copy-sel"
                onChange={(e) => handleResearchSelect(e)}
              />
              <Button
                variant="outlined"
                style={{
                  display: "flex",
                  backgroundColor: "#2cd5db",
                  marginLeft: "15px",
                  color: "black",
                }}
                onClick={(e) => handleSubmit(e)}>
                Добавить
              </Button>
            </div>
            <label>Математика и IT:</label>
            <div className="select-research">
              <Select
                options={optionsMath}
                placeholder="Название научной работы"
                maxMenuHeight={400}
                className="react-select-container"
                classNamePrefix="lp-copy-sel"
                onChange={(e) => handleResearchSelect(e)}
              />
              <Button
                variant="outlined"
                style={{
                  display: "flex",
                  backgroundColor: "#2cd5db",
                  marginLeft: "15px",
                  color: "black",
                }}
                onClick={(e) => handleSubmit(e)}>
                Добавить
              </Button>
            </div>
            <label>Химико-технологический:</label>
            <div className="select-research">
              <Select
                options={optionsChemistry}
                placeholder="Название научной работы"
                maxMenuHeight={400}
                className="react-select-container"
                classNamePrefix="lp-copy-sel"
                onChange={(e) => handleResearchSelect(e)}
              />
              <Button
                variant="outlined"
                style={{
                  display: "flex",
                  backgroundColor: "#2cd5db",
                  marginLeft: "15px",
                  color: "black",
                }}
                onClick={(e) => handleSubmit(e)}>
                Добавить
              </Button>
            </div>
            <label>Биолого-экологический:</label>
            <div className="select-research">
              <Select
                options={optionsBio}
                placeholder="Название научной работы"
                maxMenuHeight={400}
                className="react-select-container"
                classNamePrefix="lp-copy-sel"
                onChange={(e) => handleResearchSelect(e)}
              />
              <Button
                variant="outlined"
                style={{
                  display: "flex",
                  backgroundColor: "#2cd5db",
                  marginLeft: "15px",
                  color: "black",
                }}
                onClick={(e) => handleSubmit(e)}>
                Добавить
              </Button>
            </div>
            <label>Лингвистический:</label>
            <div className="select-research">
              <Select
                options={optionsLanguage}
                placeholder="Название научной работы"
                maxMenuHeight={400}
                className="react-select-container"
                classNamePrefix="lp-copy-sel"
                onChange={(e) => handleResearchSelect(e)}
              />
              <Button
                variant="outlined"
                style={{
                  display: "flex",
                  backgroundColor: "#2cd5db",
                  marginLeft: "15px",
                  color: "black",
                }}
                onClick={(e) => handleSubmit(e)}>
                Добавить
              </Button>
            </div>
            <div>
              <p>
                Чтобы закрепить за собой научно-исследовательскую работу (НИР)
                сначала нужно выбрать из раскрывающегося списка тему, которую вы
                хотите за собой закрепить, затем нажать кнопку "Добавить"
              </p>
            </div>
          </div>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}>
              НИР был успешно добавлен в личный профиль!
            </Alert>
          </Collapse>
        </>
      ) : (
        <div className="researches">
          <h2>Темы НИР:</h2>
          <label>Физико-технический:</label>
          <div className="select-research">
            <Select
              options={optionsPhysics}
              placeholder="Название научной работы"
              maxMenuHeight={400}
              className="react-select-container"
              classNamePrefix="lp-copy-sel"
            />
          </div>
          <label>Химико-технологический:</label>
          <div className="select-research">
            <Select
              options={optionsChemistry}
              placeholder="Название научной работы"
              maxMenuHeight={400}
              className="react-select-container"
              classNamePrefix="lp-copy-sel"
            />
          </div>
          <label>Математика и IT:</label>
          <div className="select-research">
            <Select
              options={optionsMath}
              placeholder="Название научной работы"
              maxMenuHeight={400}
              className="react-select-container"
              classNamePrefix="lp-copy-sel"
            />
          </div>
          <label>Биолого-экологический:</label>
          <div className="select-research">
            <Select
              options={optionsBio}
              placeholder="Название научной работы"
              maxMenuHeight={400}
              className="react-select-container"
              classNamePrefix="lp-copy-sel"
            />
          </div>
          <label>Лингвистический:</label>
          <div className="select-research">
            <Select
              options={optionsLanguage}
              placeholder="Название научной работы"
              maxMenuHeight={400}
              className="react-select-container"
              classNamePrefix="lp-copy-sel"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Nir;
