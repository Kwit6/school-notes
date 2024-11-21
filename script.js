// Класс для теоретического материала
class Theory {
    constructor(title, content, image = null) {
        this.title = title; // Заголовок
        this.content = content; // Основной текст
        this.image = image; // Ссылка на изображение (если есть)
    }
}

// Список конспектов по предметам
const subjects = {
    "Математика": [
        { name: "Алгебра", topics: [
            new Theory("Основные правила", "Алгебра — это раздел математики, который изучает уравнения и функции."),
            new Theory("Теорема Пифагора", "В прямоугольном треугольнике сумма квадратов катетов равна квадрату гипотенузы.")
        ] },
        { name: "Геометрия", topics: [
            new Theory("Площадь треугольника", "Площадь треугольника можно вычислить по формуле: S = 1/2 * основание * высота."),
            new Theory("Прямоугольные треугольники", "Существуют теоремы, как теорема Пифагора для прямоугольных треугольников.")
        ] }
    ],
    "Физика": [
        { name: "Механика", topics: [
            new Theory("Законы Ньютона", "Первый закон: тело сохраняет состояние покоя или равномерного движения..."),
            new Theory("Работа и энергия", "Энергия — это способность совершать работу.")
        ] },
        { name: "Электричество", topics: [
            new Theory("Закон Ома", "Ток в проводнике пропорционален напряжению и обратно пропорционален сопротивлению."),
            new Theory("Электрические цепи", "Электрическая цепь состоит из проводников, источников тока и потребителей.")
        ] }
    ],
    "Химия": [
        { name: "Химические реакции", topics: [
            new Theory("Окисление и восстановление", "Окисление — это процесс потери электронов, восстановление — приобретение."),
            new Theory("Типы реакций", "Существует несколько типов реакций: замещения, присоединения и т. д.")
        ] },
        { name: "Атомы и молекулы", topics: [
            new Theory("Атом", "Атом — это мельчайшая частица вещества, сохраняющая все его химические свойства."),
            new Theory("Молекулы", "Молекулы состоят из двух или более атомов, связанных химической связью.")
        ] }
    ]
};

// Генерация вкладок предметов
const subjectsMenu = document.getElementById("subjects-menu");
const contentDiv = document.getElementById("content");

// Кнопка "Назад"
function createBackButton(onClick) {
    const backButton = document.createElement("button");
    backButton.textContent = "Назад";
    backButton.onclick = onClick;
    return backButton;
}

// Отображение списка предметов
function displaySubjects() {
    contentDiv.innerHTML = "";
    const list = document.createElement("ul");
    Object.keys(subjects).forEach(subject => {
        const subjectItem = document.createElement("li");
        const subjectLink = document.createElement("a");
        subjectLink.href = "#";
        subjectLink.textContent = subject;
        subjectLink.onclick = () => displayTopics(subject);
        subjectItem.appendChild(subjectLink);
        list.appendChild(subjectItem);
    });
    contentDiv.appendChild(list);
}

// Отображение списка тем по выбранному предмету
function displayTopics(subject) {
    contentDiv.innerHTML = "";
    const backButton = createBackButton(() => {
        displaySubjects();
    });
    contentDiv.appendChild(backButton);

    const subjectData = subjects[subject];
    const list = document.createElement("ul");
    subjectData.forEach(unit => {
        const unitItem = document.createElement("li");
        const unitLink = document.createElement("a");
        unitLink.href = "#";
        unitLink.textContent = unit.name;
        unitLink.onclick = () => displayTopicContent(subject, unit.name);
        unitItem.appendChild(unitLink);
        list.appendChild(unitItem);
    });
    contentDiv.appendChild(list);
}

// Отображение контента для выбранной темы
function displayTopicContent(subject, topicName) {
    contentDiv.innerHTML = "";
    const backButton = createBackButton(() => {
        displayTopics(subject);
    });
    contentDiv.appendChild(backButton);

    const unit = subjects[subject].find(unit => unit.name === topicName);
    const topic = unit.topics[0]; // Здесь выбирается первая тема из списка
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const text = document.createElement("p");

    title.textContent = topic.title;
    text.textContent = topic.content;

    section.appendChild(title);
    section.appendChild(text);

    if (topic.image) {
        const img = document.createElement("img");
        img.src = topic.image;
        img.alt = topic.title;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "8px";
        section.appendChild(img);
    }

    contentDiv.appendChild(section);
}

// Инициализация
displaySubjects();
