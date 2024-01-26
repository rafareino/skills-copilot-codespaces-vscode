function skillsMember() {
    var skills = ["HTML", "CSS", "Javascript", "PHP", "MySQL"];
    var skillsMembrer = document.getElementById('skillsMembrer');
    skillsMembrer.innerHTML = "";
    for (var i = 0; i < skills.length; i++) {
        skillsMembrer.innerHTML += "<li>" + skills[i] + "</li>";
    }
}
