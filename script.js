// Calculateur de risque
function calculateRisk() {
    const menaces = document.getElementById('menaces').value;
    const vulns = document.getElementById('vulns').value;
    const caps = document.getElementById('caps').value;
    
    document.getElementById('menaces-val').textContent = menaces;
    document.getElementById('vulns-val').textContent = vulns;
    document.getElementById('caps-val').textContent = caps;
    
    const risk = (menaces * vulns) / caps;
    const riskBar = document.getElementById('risk-bar');
    const riskLevel = document.getElementById('risk-level');
    
    riskBar.style.width = Math.min(risk * 10, 100) + '%';
    riskLevel.textContent = `Niveau de Risque: ${risk.toFixed(1)}`;
    
    if (risk < 5) {
        riskBar.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    } else if (risk < 10) {
        riskBar.style.background = 'linear-gradient(135deg, #f39c12, #f1c40f)';
    } else {
        riskBar.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    }
}

// Matrice de risque
function showRiskInfo(prob, impact) {
    const rec = document.getElementById('risk-recommendation');
    const text = document.getElementById('risk-text');
    const score = prob * impact;
    
    rec.style.display = 'block';
    
    if (score <= 6) {
        text.innerHTML = `<strong style="color: #27ae60;">• Zone gris clair (Score: ${score}) : Risques acceptables</strong><br><br>
        Utilisez vos mesures de sécurité habituelles. Maintenez votre vigilance sans modifier vos activités.`;
    } else if (score <= 15) {
        text.innerHTML = `<strong style="color: #f39c12;">• Zone gris intermédiaire (Score: ${score}) : Risques modérés</strong><br><br>
        Mettez en place un plan d'action pour réduire la probabilité. Renforcez vos protocoles de sécurité et informez votre réseau de soutien.`;
    } else {
        text.innerHTML = `<strong style="color: #e74c3c;">• Zone gris foncé (Score: ${score}) : Risques critiques</strong><br><br>
        Mise en œuvre impérative d'un plan d'action ET d'un plan de contingence. Activez immédiatement vos mesures d'urgence et contactez vos soutiens.`;
    }
}

// Évaluation des capacités
function checkCapacities() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]:checked');
    const total = document.querySelectorAll('.checklist input[type="checkbox"]').length;
    const score = (checkboxes.length / total) * 100;
    
    const scoreDiv = document.getElementById('capacity-score');
    let message = '';
    
    if (score < 40) {
        message = `<div style="padding: 20px; background: #e74c3c; color: white; border-radius: 10px;">
            <strong>Score: ${score.toFixed(0)}%</strong><br>
            Vos capacités sont insuffisantes. Action urgente requise pour renforcer votre sécurité!
        </div>`;
    } else if (score < 70) {
        message = `<div style="padding: 20px; background: #f39c12; color: white; border-radius: 10px;">
            <strong>Score: ${score.toFixed(0)}%</strong><br>
            Capacités moyennes. Continuez à développer vos mesures de protection.
        </div>`;
    } else {
        message = `<div style="padding: 20px; background: #27ae60; color: white; border-radius: 10px;">
            <strong>Score: ${score.toFixed(0)}%</strong><br>
            Excellentes capacités! Maintenez et révisez régulièrement vos mesures.
        </div>`;
    }
    
    scoreDiv.innerHTML = message;
}

// Initialisation
document.addEventListener('DOMContentLoaded', calculateRisk); 