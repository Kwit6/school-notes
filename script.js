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
        new Theory(
            "Алгебра: Основные правила",
            "Алгебра — это раздел математики, который изучает уравнения и функции.",
            "https://example.com/algebra.png" // Укажи ссылку на картинку
        ),
        new Theory(
            "Теорема Пифагора",
            "В прямоугольном треугольнике сумма квадратов катетов равна квадрату гипотенузы.",
            "https://example.com/pythagoras.png"
        )
    ],
    "Физика": [
        new Theory(
            "Законы Ньютона",
            "Первый закон: тело сохраняет состояние покоя или равномерного движения...",
            "https://example.com/newton.png"
        ),
        new Theory(
            "Энергия",
            "Энергия — это способность совершать работу."
        )
    ],
    "Химия": [
        new Theory(
            "Атомы и молекулы",
            "Атом — это мельчайшая частица вещества.",
            "https://example.com/atoms.png"
        ),
        new Theory(
            "Периодическая таблица",
            "Система элементов, созданная Д. И. Менделеевым."
        )
    ]
};

// Генерация вкладок предметов
const subjectsMenu = document.getElementById("subjects-menu");
const contentDiv = document.getElementById("content");

Object.keys(subjects).forEach(subject => {
    const tab = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = subject;
    link.addEventListener("click", () => displaySubjectContent(subject));
    tab.appendChild(link);
    subjectsMenu.appendChild(tab);
});

// Отображение конспектов для выбранного предмета
function displaySubjectContent(subject) {
    contentDiv.innerHTML = ""; // Очищаем контент
    const subjectContent = subjects[subject];
    subjectContent.forEach(theory => {
        const section = document.createElement("section");
        const title = document.createElement("h2");
        const text = document.createElement("p");

        title.textContent = theory.title;
        text.textContent = theory.content;

        section.appendChild(title);
        section.appendChild(text);

        // Если есть изображение, добавляем его
        if (theory.image) {
            const img = document.createElement("img");
            img.src = theory.image;
            img.alt = theory.title;
            img.style.maxWidth = "100%"; // Чтобы картинка не выходила за рамки
            img.style.borderRadius = "8px";
            section.appendChild(img);
        }

        contentDiv.appendChild(section);
    });
}
