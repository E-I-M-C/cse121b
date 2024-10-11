// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
    changeStudent: function(sectionNum, enrollDrop) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
            if (enrollDrop == 1) {
                this.sections[sectionIndex].enrolled++;
            }
            else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

function setCourseInfo(course) {
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
}

function renderSections(sections) {
    document.querySelector("#sections").innerHTML = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`
    ).join("");
}

/*
document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});
*/
document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeStudent(sectionNum, 1);
});
document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeStudent(sectionNum, 0);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);