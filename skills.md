---
layout: default
---

<div>
    <h1 class="skills-title">Skills</h1>
<!-- TODO: Use data to make skills appear -->
    <div class="skills-wrapper">
        {% for skill in site.data.skills %}
            <img src="{{ skill.image }}" alt="{{ skill.tag }} Logo" onclick="toggleModule(this.id)" id="{{ skill.tag }}">
        {% endfor %}
    </div>
</div>

{% for skill in site.data.skills %}
<div class="module" id="module-{{ skill.tag }}" style="display:none;">
    <div class="module-content">
    <a class="closing-button" href="#" onclick="toggleModule('{{ skill.tag }}')"><i class="fa fa-times"></i></a>
        <div class="skills-detail-header">
            <img src="{{ skill.image }}" alt="{{ skill.tag }} Logo">
            <h1>{{ skill.title }}</h1>
        </div>
        <p>
            {{ skill.content }}
        </p>
    </div>
</div>
{% endfor %}