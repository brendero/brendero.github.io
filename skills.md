---
layout: default
---

<div>
    <h1 class="skills-title">Skills</h1>
<!-- TODO: Use data to make skills appear -->
    <div class="skills-wrapper">
        <img src="images/ProgrammingLogos/Html5.png" alt="HTML5 logo" onclick="toggleModule(this.id)" id="html">
        <img src="images/ProgrammingLogos/css.png" alt="CSS3 logo" onclick="toggleModule(this.id)" id="css">
        <img src="images/ProgrammingLogos/sass.svg" alt="SASS logo" onclick="toggleModule(this.id)" id="sass">
        <img src="images/ProgrammingLogos/jsLogo.png" alt="Javascript logo" onclick="toggleModule(this.id)" id="js">
    </div>
    <div class="skills-wrapper">
        <img src="images/ProgrammingLogos/Angular.png" alt="Angular logo" onclick="toggleModule(this.id)" id="angular">
        <img src="images/ProgrammingLogos/jquery.svg" alt="Jquery logo" onclick="toggleModule(this.id)" id="jquery">
        <img src="images/ProgrammingLogos/Php.png" alt="PHP logo" onclick="toggleModule(this.id)" id="php">
        <img src="images/ProgrammingLogos/Laravel.png" alt="Laravel logo" onclick="toggleModule(this.id)" id="laravel">
    </div>
    <div class="skills-wrapper">
        <img src="images/ProgrammingLogos/Wordpress.png" alt="Wordpress logo" onclick="toggleModule(this.id)" id="wordpress">
        <img src="images/ProgrammingLogos/C.png" alt="CSharp logo" onclick="toggleModule(this.id)" id="csharp">
        <img src="images/ProgrammingLogos/dotnet.svg" alt="Dotnet logo" onclick="toggleModule(this.id)" id="dotnet">
        <img src="images/ProgrammingLogos/MySQL.png" alt="MySQL logo" onclick="toggleModule(this.id)" id="mysql">
    </div>
    <div class="skills-wrapper skills-last-row">
        <img src="images/ProgrammingLogos/Python.png" alt="Python logo" onclick="toggleModule(this.id)" id="python">
        <img src="images/ProgrammingLogos/Adobe.png" alt="Adobe logo" onclick="toggleModule(this.id)" id="adobe">
        <img src="images/ProgrammingLogos/vue.png" alt="Vue logo" onclick="toggleModule(this.id)" id="vue">
    </div>
</div>

{% for skill in site.data.skills %}
<div class="module" id="module-{{ skill.tag }}">
<a class="closing-button" href="#" onclick="toggleModule('{{ skill.tag}}')"><i class="fa fa-times"></i></a>
    <div class="skills-detail-header">
        <img src="{{ skill.image }}" alt="{{ skill.tag }} Logo">
        <h1>{{ skill.title }}</h1>
    </div>
        <p>
            {{ skill.content }}
        </p>
</div>
{% endfor %}