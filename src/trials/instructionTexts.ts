import type { InstructionTexts } from "../types/d.ts";

export const instructionTexts: InstructionTexts = {
  instruction: `
    <div class="instructions">
      <p>Bitte schließen oder aktualisieren Sie Ihr Browserfenster NICHT, während Sie die Studie durchführen.</p>
      <p>Vielen Dank für Ihr Interesse an der Online-Studie zur Beurteilung der Fahrlässigkeit in Alltagssituationen.</p>
      <p>Bevor Sie sich dazu entscheiden, teilzunehmen, werden Sie über den Ablauf und das Ziel der Untersuchung informiert. Lesen Sie dazu bitte die nachfolgenden Informationen sorgfältig durch.</p>
    </div>
  `,

  informedConsentOne: `
    <div class="instructions">
      <p><strong>Wer führt diese Studie durch und worum geht es?</strong><br>
      Ich bin eine Bachelor-Studentin der Psychologie der Universität Heidelberg. Im Rahmen meiner Abschlussarbeit in der Allgemeinen Psychologie unter der Betreuung von Prof. Dr. Jan Rummel untersuche ich, wie Personen die Fahrlässigkeit von Handlungen in verschiedenen Alltagssituationen beurteilen.</p>

      <p><strong>Wie ist der Ablauf der Studie?</strong><br>
      Bei dieser Studie handelt es sich um eine einmalige Online-Studie mit einer Bearbeitungsdauer von etwa X Minuten. <br>
Zu Beginn werden Sie gebeten, einige allgemeine Angaben zu Ihrer Person zu machen. Anschließend erhalten Sie eine kurze Einführung sowie eine Definition des Begriffs Fahrlässigkeit. <br>
Im Hauptteil der Studie werden Ihnen mehrere kurze Fallvignetten aus unterschiedlichen Alltagssituationen präsentiert. Nach jeder Fallvignette werden Sie gebeten, Einschätzungen zur Fahrlässigkeit der handelnden Person abzugeben.

</p>

      <p><strong>Welche Vorteile hat die Studienteilnahme?</strong><br>
      Durch Ihre Teilnahme leisten Sie einen Beitrag zur psychologischen Forschung und helfen dabei, das Verständnis laienhafter Bewertungen fahrlässigen Handelns in Alltagssituationen zu erweitern. Für die Teilnahme an der Studie erhalten sie eine monetäre Vergütung gemäß den Richtlinien der Plattform Prolific.</p>

      <p><strong>Ergeben sich aus der Teilnahme an der Studie für Sie Risiken oder Nachteile?</strong><br>
      Durch die Teilnahme an der Studie sind keine Risiken oder Nachteile zu erwarten. Es werden keine psychischen Belastungen angenommen, die über alltägliche Erfahrungen hinausgehen. Sollten Sie sich während der Teilnahme dennoch unwohl fühlen, können Sie die Studie jederzeit und ohne Angabe von Gründen abbrechen.</p>

      <p><strong>Wer darf an dieser Studie teilnehmen?</strong><br>
      Teilnahmeberechtigt sind Personen ab 18 Jahren. Für die Studienteilnahme sind gute Deutschkenntisse erforderlich. Bitte nehmen Sie nur teil, wenn Sie Deutsch fließend verstehen. <br>
Personen mit juristischen Vorkenntnissen (z.B. Studium oder berufliche Tätigkeit im juristischen Bereich) sind von der Teilnahme ausgeschlossen, da die Studie laienhafte Bewertungen untersucht.
</p>

      <p><strong>Freiwilligkeit der Teilnahme und Rücktritt</strong><br>
      Die Teilnahme an dieser Studie ist freiwillig. Sie können Ihre Teilnahme jederzeit und ohne Angabe von Gründen abbrechen, ohne dass Ihnen dadurch Nachteile entstehen.
Alle im Rahmen dieser Studie erhobenen Daten werden vertraulich behandelt und in anonymisierter Form für wissenschaftliche Zwecke ausgewertet. Die erhobenen demografischen Angaben erlauben keine Rückschlüsse auf Ihre Identität. <br>
Da die Datenerhebung anonym erfolgt, ist ein nachträglicher Widerruf der Nutzung bereits erhobener Daten nach Abschluss der Teilnahme nicht mehr möglich. Bei Fragen zur Studie können Sie sich jederzeit an die Studienleitung wenden.
</p>
    </div>
  `,

  informedConsentTwo: `
    <div class="instructions">
      <p><strong>Verwendung der Daten</strong><br>
      Um die in der Studie erhobenen Daten zu schützen, werden sie anonymisiert gespeichert und verarbeitet und selbstverständlich vertraulich behandelt, sodass eine Zuordnung Ihrer Daten zu Ihrer Person für Dritte und Forschende zu keinem Zeitpunkt möglich ist. Die verschlüsselten Daten werden ausschließlich für unser wissenschaftliches Projekt verwendet sowie auf dem öffentlich zugänglichen Open-Science-Portal OSF (https://osf.io) bereitgestellt. <br>
      <strong> Rückschlüsse auf Ihre Identität sind nicht möglich. </strong> Die vollständig anonymisierten Daten können zu Forschungszwecken weiterverwendet werden. Dazu werden die vollständig anonymisierten Daten mindestens 10 Jahre nach der Auswertung, bzw. nachdem die Ergebnisse veröffentlicht worden sind, aufbewahrt. Veröffentlichte Forschungsergebnisse und auf Open-Science-Portalen bereitgestellte Studiendaten stehen für die weitere Nutzung zeitlich unbegrenzt zur Verfügung. <br>
      Mit der Publikation der anonymisierten Daten folgt diese Studie den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) und der Deutschen Gesellschaft für Psychologie (DGPs) zur Qualitätssicherung in der Forschung.</p>

      <p><strong>Kontaktadressen für Fragen</strong><br>
      Als teilnehmende Person können Sie jederzeit Fragen über alle Angelegenheiten im Zusammenhang mit der Studie stellen. Bei Rückfragen stehe ich Ihnen gerne per E-Mail zur Verfügung.
      Für Ihre Bereitschaft und Ihre Unterstützung bedanke ich mich im Voraus!</p>
      <p><a>isabel.kerz@stud.uni-heidelberg.de</a><br>
      <a>jan.rummel@psychologie.uni-heidelberg.de</a></p>
    </div>
  `,

  instructionsStudy: `
    <div class="instructions">
      <p>Im Folgenden werden Ihnen mehrere kurze Fallvignetten aus unterschiedlichen Alltagssituationen präsentiert. In diesen wird jeweils das Verhalten einer handelnden Person geschildert.</p>
      <p>Bitte lesen Sie jede Fallbeschreibung aufmerksam durch und geben Sie anschließend Ihre persönliche Einschätzung ab. Es gibt dabei keine richtigen oder falschen Antworten. Uns interessiert ausschließlich Ihre subjektive Einschätzung.</p>
      <p>Um sicherzustellen, dass alle Teilnehmenden von einem vergleichbaren Begriffsverständis ausgehen, wird Ihnen zunächst eine kurze Definition des Begriffs Fahrlässigkeit vorgestellt. Bitte lesen Sie diese aufmerksam durch, bevor Sie mit der Bearbeitung der Fallvignetten beginnen.</p>

      <p><i>Definition von Fahrlässigkeit:</i><br>
      Fahrlässigkeit bezeichnet ein Handeln oder auch Unterlassen einer Handlung ohne Schädigungsabsicht. Die fahrlässige Person handelt oder unterlässt eine Handlung bewusst und willentlich und verursacht dadurch einen Schaden. Sie verfügt über relevantes Wissen zur Risikobeurteilung (oder sollte vernünftigerweise darüber verfügen) und unterlässt es dennoch, die gebotene Sorgfalt zur Vermeidung eines vorhersehbaren Schadens anzuwenden (vgl. Nuñez et al., 2014; Laurent et al., 2016; Nobes et al., 2009).</p>

      <p style="font-size: 0.85em; margin-top: 1.5em;">
        Laurent, S. M., Nuñez, N. L., &amp; Schweitzer, K. A. (2016).
        <em>Unintended, but still blameworthy: The roles of awareness, desire, and anger in negligence, restitution, and punishment.</em>
        Cognition and Emotion, 30(7), 1271–1288.
        <a href="https://doi.org/10.1080/02699931.2015.1058242" target="_blank" rel="noopener">
          https://doi.org/10.1080/02699931.2015.1058242
        </a>
      </p>

      <p style="font-size: 0.85em;">
        Nobes, G., Panagiotaki, G., &amp; Pawson, C. (2009).
        <em>The influence of negligence, intention, and outcome on children’s moral judgments.</em>
        Journal of Experimental Child Psychology, 104(4), 382–397.
        <a href="https://doi.org/10.1016/j.jecp.2009.08.001" target="_blank" rel="noopener">
          https://doi.org/10.1016/j.jecp.2009.08.001
        </a>
      </p>

      <p style="font-size: 0.85em;">
        Nuñez, N., Laurent, S., &amp; Gray, J. M. (2014).
        <em>Is negligence a first cousin to intentionality? Lay conceptions of negligence and its relationship to intentionality.</em>
        Applied Cognitive Psychology, 28(1), 55–65.
        <a href="https://doi.org/10.1002/acp.2957" target="_blank" rel="noopener">
          https://doi.org/10.1002/acp.2957
        </a>
      </p>
    </div>
    `,

  debrief: `
    <div class="instructions">
      <h2>Vielen Dank für Ihre Teilnahme!</h2>
      <p>Sie haben die Studie erfolgreich abgeschlossen.</p>
      <p>Mit Ihrer Teilnahme haben Sie einen wichtigen Beitrag zur psychologischen Forschung geleistet. Ihre Antworten helfen uns dabei, besser zu verstehen, wie Menschen fahrlässiges Handeln in Alltagssituationen beurteilen.</p>
      <p><strong>Hintergrund der Studie:</strong><br>
      In dieser Studie untersuchen wir, wie verschiedene Faktoren die Beurteilung von Fahrlässigkeit beeinflussen. Dabei interessiert uns besonders, wie sich unterschiedliche Konsequenzen einer Handlung und die Art der Entscheidungsfindung auf Ihre Einschätzungen auswirken.</p>
      <p>Bei Fragen zur Studie können Sie sich jederzeit an die Studienleitung wenden.</p>
      <p>Nochmals vielen Dank für Ihre Zeit und Ihre Unterstützung!</p>
    </div>
  `,
};
