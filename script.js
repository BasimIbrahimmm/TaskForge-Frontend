/* =========================================================
   TASKFORGE
   Vanilla JavaScript
   ========================================================= */


/* =========================
   ELEMENTS
========================= */

const body = document.body;

const themeToggle =
    document.getElementById("themeToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.getElementById("sidebar");

const openTaskModal =
    document.getElementById("openTaskModal");

const taskModal =
    document.getElementById("taskModal");

const closeTaskModal =
    document.getElementById("closeTaskModal");

const cancelTask =
    document.getElementById("cancelTask");

const taskForm =
    document.getElementById("taskForm");

const taskTitle =
    document.getElementById("taskTitle");

const taskPriority =
    document.getElementById("taskPriority");

const taskProject =
    document.getElementById("taskProject");

const taskList =
    document.getElementById("taskList");

const taskSearch =
    document.getElementById("taskSearch");


/* =========================
   DARK MODE
========================= */

function applyTheme(theme) {

    if (theme === "dark") {
        body.setAttribute("data-theme", "dark");
    } else {
        body.removeAttribute("data-theme");
    }

    localStorage.setItem("taskforge-theme", theme);
}


const savedTheme =
    localStorage.getItem("taskforge-theme");


if (savedTheme) {
    applyTheme(savedTheme);
} else {

    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    applyTheme(
        prefersDark
            ? "dark"
            : "light"
    );
}


themeToggle.addEventListener("click", () => {

    const isDark =
        body.getAttribute("data-theme") === "dark";

    applyTheme(
        isDark
            ? "light"
            : "dark"
    );

});


/* =========================
   MOBILE SIDEBAR
========================= */

mobileMenu.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* Close sidebar after clicking navigation */

document
    .querySelectorAll(".nav-item")
    .forEach(item => {

        item.addEventListener("click", () => {

            if (
                window.innerWidth <= 768
            ) {
                sidebar.classList.remove("open");
            }

        });

    });


/* =========================
   ACTIVE NAVIGATION
========================= */

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );

        item.classList.add("active");

    });

});


/* =========================
   MODAL
========================= */

function openModal() {

    taskModal.classList.add("active");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
        taskTitle.focus();
    }, 100);

}


function closeModal() {

    taskModal.classList.remove("active");

    document.body.style.overflow = "";

}


openTaskModal.addEventListener(
    "click",
    openModal
);


closeTaskModal.addEventListener(
    "click",
    closeModal
);


cancelTask.addEventListener(
    "click",
    closeModal
);


/* Close by clicking outside */

taskModal.addEventListener(
    "click",
    event => {

        if (event.target === taskModal) {
            closeModal();
        }

    }
);


/* Close with Escape */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            taskModal.classList.contains("active")
        ) {
            closeModal();
        }

    }
);


/* =========================
   COMPLETE TASK
========================= */

function attachTaskEvents() {

    const taskButtons =
        document.querySelectorAll(".task-check");


    taskButtons.forEach(button => {

        button.onclick = () => {

            const taskItem =
                button.closest(".task-item");

            taskItem.classList.toggle(
                "completed"
            );

            updateTaskCount();

        };

    });

}


attachTaskEvents();


/* =========================
   TASK COUNTER
========================= */

function updateTaskCount() {

    const total =
        document.querySelectorAll(
            ".task-item"
        ).length;

    const completed =
        document.querySelectorAll(
            ".task-item.completed"
        ).length;

    const navCount =
        document.querySelector(".nav-count");

    if (navCount) {

        navCount.textContent =
            Math.max(total - completed, 0);

    }

}


updateTaskCount();


/* =========================
   CREATE TASK
========================= */

taskForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const title =
            taskTitle.value.trim();

        const project =
            taskProject.value;

        const priority =
            taskPriority.value;


        if (!title) {
            return;
        }


        const priorityLabel =
            priority.charAt(0).toUpperCase() +
            priority.slice(1);


        const task =
            document.createElement("article");

        task.className =
            "task-item";


        task.innerHTML = `

            <button
                class="task-check"
                aria-label="Complete task"
            >
                <svg viewBox="0 0 24 24">
                    <path d="m5 12 4 4L19 6"></path>
                </svg>
            </button>

            <div class="task-details">

                <strong>${escapeHTML(title)}</strong>

                <span>${escapeHTML(project)}</span>

            </div>

            <span class="priority ${priority}">
                ${priorityLabel}
            </span>

            <span class="task-time">
                Today
            </span>

        `;


        taskList.prepend(task);


        attachTaskEvents();

        updateTaskCount();


        taskForm.reset();

        closeModal();

    }
);


/* =========================
   SEARCH TASKS
========================= */

taskSearch.addEventListener(
    "input",
    () => {

        const query =
            taskSearch.value
                .trim()
                .toLowerCase();


        const tasks =
            document.querySelectorAll(
                ".task-item"
            );


        tasks.forEach(task => {

            const text =
                task.textContent.toLowerCase();


            if (
                text.includes(query)
            ) {

                task.style.display = "";

            } else {

                task.style.display = "none";

            }

        });

    }
);


/* =========================
   FILTER BUTTONS
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

        }
    );

});


/* =========================
   SAFE HTML
========================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;

}


/* =========================
   CLOSE SIDEBAR WHEN CLICKING
   OUTSIDE ON MOBILE
========================= */

document.addEventListener(
    "click",
    event => {

        if (
            window.innerWidth > 768
        ) {
            return;
        }


        if (
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            !mobileMenu.contains(event.target)
        ) {

            sidebar.classList.remove("open");

        }

    }
);


/* =========================
   RESIZE SAFETY
========================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 768
        ) {

            sidebar.classList.remove(
                "open"
            );

        }

    }
);