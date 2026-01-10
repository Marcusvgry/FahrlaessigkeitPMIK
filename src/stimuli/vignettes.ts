import type { VignetteTemplate } from "./vignetteRenderer";

export const vignetteTemplates: VignetteTemplate[] = [
  {
    id: 1,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Dr. Martin W. ist Hausarzt in einer mittelgroßen Praxis. Sein Freund Tobias C. ruft an und bittet ihn, ihn in der kommenden Woche kurz zu untersuchen. Martin sagt zu: „Komm einfach vorbei, wenn du Zeit findest.“ Tobias erinnert ihn noch: „Aber denk bitte dran, dass ich auf Amoxicillin allergisch bin.“`,
      },
      {
        kind: "offload_yes",
        text: `Martin öffnet Tobias’ elektronische Patientenakte und vermerkt: „Achtung: Allergie gegen Amoxicillin!“ Zusätzlich legt er einen Haftzettel auf seinen Schreibtisch, um sich beim nächsten Besuch daran zu erinnern.`,
      },
      {
        kind: "offload_no",
        text: `Martin nickt und ist davon überzeugt, sich diese Info merken zu können.`,
      },
      {
        kind: "base",
        text: `Einige Tage später kommt Tobias unangekündigt vorbei, während Martin gerade im Stress ist.  Nach kurzer Untersuchung diagnostiziert er eine bakterielle Bronchitis und verschreibt ein Standardantibiotikum – Amoxicillin.`,
      },
      {
        kind: "offload_yes",
        text: `Er öffnet die Akte, aber übersieht die Notiz im Eilschritt. Auch der Haftzettel ist unter anderen Papieren verschwunden.`,
      },
      {
        kind: "base",
        text: `Nach kurzer Untersuchung diagnostiziert er eine bakterielle Bronchitis und verschreibt ein Standardantibiotikum – Amoxicillin.`,
      },
      {
        kind: "cons_low",
        text: `Erst als Tobias später berichtet, dass ihm übel ist und er Hautausschlag entwickelt, fällt Martin die Allergie wieder ein. Tobias geht es nach einem Tag wieder besser.`,
      },
      {
        kind: "cons_high",
        text: `Kurze Zeit später erleidet Tobias eine schwere allergische Reaktion und muss mit einem anaphylaktischen Schock ins Krankenhaus gebracht werden. Er überlebt, aber nur knapp.`,
      },
    ],
  },
  {
    id: 2,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Dr. Jana H. ist Internistin in einer Gemeinschaftspraxis, überprüft am Nachmittag mehrere Laborergebnisse. Bei Frau K. fällt ein erhöhter Bilirubinwert auf. Jana möchte die Werte am Abend erneut kontrollieren, wenn das Labor die restlichen Daten eingetragen hat.`,
      },
      {
        kind: "offload_yes",
        text: `Um daran erinnert zu werden, legt sie in der Praxissoftware eine elektronische Markierung an und notiert zusätzlich auf einem Zettel: „Bilirubin Klein – abends prüfen“.`,
      },
      {
        kind: "offload_no",
        text: `Sie beschließt, sich den Vorgang zu merken und die Akte später erneut zu öffnen.`,
      },
      {
        kind: "base",
        text: `Im Verlauf des Nachmittags wird sie durch mehrere Anrufe und Rückfragen abgelenkt. Nach Feierabend schließt sie die Praxis, ohne die Kontrolle durchgeführt zu haben.`,
      },
      {
        kind: "cons_low",
        text: `Am nächsten Morgen ruft sie die Laborübersicht auf und sieht, dass sich der Bilirubinwert nicht verändert hat. Es besteht kein unmittelbarer Handlungsbedarf – der Wert sollte allerdings in der nächsten Zeit nochmal kontrolliert werden.`,
      },
      {
        kind: "cons_high",
        text: `Am nächsten Morgen erfährt sie, dass der Bilirubinwert inzwischen deutlich gestiegen ist. Frau K. ruft an, weil sie eine Gelbfärbung der Haut bemerkt hat und wird zur stationären Abklärung eingewiesen.`,
      },
    ],
  },
  {
    id: 3,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Pflegefachkraft Anna U. arbeitet im Frühdienst auf einer internistischen Station. Bei der morgendlichen Übergabe wird erwähnt, dass Herr B., 78 Jahre alt, noch unsicher auf den Beinen ist und beim nächsten Toilettengang unbedingt begleitet werden soll`,
      },
      {
        kind: "offload_yes",
        text: `Um sicherzugehen, dass sie das nicht vergisst, befestigt Anna eine kleine Erinnerungskarte am Zimmerplan mit dem Hinweis „Begleitung beim WC“ und schreibt zusätzlich eine Notiz in ihre elektronische Aufgabenliste.`,
      },
      {
        kind: "offload_no",
        text: `Anna nimmt sich vor, darauf zu achten, sobald Herr B. die Klingel benutzt oder aufsteht.`,
      },
      {
        kind: "base",
        text: `Im weiteren Verlauf des Vormittags wird sie mehrfach unterbrochen – Blutdruckkontrollen, Medikamentenausgabe, Fragen von Angehörigen. Während sie an einem anderen Bett beschäftigt ist, hört sie die Toilettenspülung aus Herrn B. Zimmer. Erst als sie ihn rufen hört, fällt ihr ein, dass sie ihn eigentlich hätte begleiten sollen. Herr B. ist im Bad gestürzt`,
      },
      {
        kind: "cons_low",
        text: `und benötigt Hilfe beim Aufstehen. Ansonsten ist er wohlauf.`,
      },
      {
        kind: "cons_high",
        text: `und klagt über starke Schmerzen im Bein. Nach der Untersuchung wird ein Schenkelhalsbruch festgestellt.`,
      },
    ],
  },
  {
    id: 4,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Zu Beginn seiner Schicht führt Rettungssanitäter Lukas B. wie jeden Morgen eine kurze Fahrzeug- und Materialkontrolle durch.`,
      },
      {
        kind: "offload_yes",
        text: `Um an alle sicherheitsrelevanten Punkte zu denken, nimmt er sich eine Checkliste zur Hilfe, die er Schritt für Schritt abarbeitet. Als er zum Punkt „Sauerstoffvorrat prüfen“ kommt, wird er von einem Anruf der Leitstelle unterbrochen, der sich auf eine organisatorische Rückfrage bezieht. Anschließend setzt er die Liste fort, übersieht aber, dass dieser Punkt noch offen ist, und hakt ihn versehentlich ab, ohne den Sauerstoff überprüft zu haben.`,
      },
      {
        kind: "offload_no",
        text: `Da dies eine Routine Aufgabe für ihn ist, verlässt er sich auf sein Gedächtnis an alles zu denken, besonders daran, den Sauerstoffvorrat zu prüfen. Kurz bevor er diesen prüfen will, wird er von einem Anruf der Leitstelle unterbrochen, der sich auf eine organisatorische Rückfrage bezieht. Anschließend setzt Lukas die Prüfung fort, vergisst jedoch die Sauerstoffprüfung vollständig.`,
      },
      {
        kind: "base",
        text: `Eine Stunde später wird Lukas mit seinem Team zu einem Notfall gerufen: Eine Patientin leidet unter schwerer Atemnot. Als Lukas das Beatmungsgerät anschließen will, stellt er fest, dass die Sauerstoffflasche nahezu leer ist.`,
      },
      {
        kind: "cons_low",
        text: `Das Team muss auf eine Reserveflasche aus dem hinteren Fach ausweichen, was zu einer kurzen Verzögerung führt. Die Patientin kann dennoch rechtzeitig stabilisiert werden. Als das Team die Patientin abtransportiert, reagiert ein Angehöriger jedoch verärgert auf die Verzögerung und äußert den Verdacht, dass der Rettungsdienst unzureichend vorbereitet gewesen sei. Er kündigt an, eine formelle Beschwerde einzureichen und den Vorfall „juristisch prüfen zu lassen“.`,
      },
      {
        kind: "cons_high",
        text: `Das Team muss improvisieren und verliert wertvolle Minuten, bis ein Ersatzgerät eintrifft. Die Patientin verschlechtert sich deutlich und muss später intensivmedizinisch behandelt werden.`,
      },
    ],
  },
  {
    id: 5,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Diätassistentin Sarah R. arbeitet in der Zentralküche einer Klinik. Am Vormittag erhält sie von der Pflege der Station die Information, dass bei Patient Herrn W. für das Mittagessen eine Kostformanpassung notwendig ist. Sobald das automatische Produktionsprotokoll für die Mittagsausgabe aus dem Drucker kommt, soll sie kontrollieren, ob die Änderung korrekt übernommen wurde, da es hier in letzter Zeit häufiger zu Fehlern gekommen war.`,
      },
      {
        kind: "offload_yes",
        text: `Um sich daran zu erinnern, klemmt sie ein farbiges Schild mit der Aufschrift „KOSTFORMÄNDERUNG HERR W.“ an den Drucker.`,
      },
      {
        kind: "offload_no",
        text: `Sarah ist sich sicher, daran denken zu können.`,
      },
      {
        kind: "base",
        text: `Anschließend bearbeitet sie eine Nährwertberechnung und überprüft später Lieferunterlagen im hinteren Bereich der Küche.Während sie dort beschäftigt ist, wird das Mittagsprotokoll automatisch ausgedruckt. Das Ausgabeteam nimmt den Ausdruck mit, um die Tabletts vorzubereiten. Als Sarah später wieder an ihrem Arbeitsplatz vorbeikommt, bemerkt sie, dass sie den Ausdruck bereits verpasst hat. Sie ruft sofort auf der Station an und erfährt, dass der Patient das Mittagessen bereits erhalten hat und die Kostformänderung nicht umgesetzt wurde.`,
      },
      {
        kind: "cons_low",
        text: `Im Laufe des Nachmittags meldet die Pflege, dass Herr W. nur ein leichtes, schnell vergangenes Unwohlsein angegeben hat.`,
      },
      {
        kind: "cons_high",
        text: `Im Laufe des Nachmittags meldet die Pflege, dass Herr W. über ausgeprägte Magenbeschwerden und Erbrechen klagt.`,
      },
    ],
  },
  {
    id: 6,
    domain: `Gesundheitsversorgung/Pflege`,
    segments: [
      {
        kind: "base",
        text: `Ute T. ist psychologische Psychotherapeutin in einer ambulanten Einrichtung. In der ersten Sitzung bittet ihr Patient Herr L. sie ausdrücklich darum, ihn im Wartebereich nie mit seinem vollständigen Namen aufzurufen, da er in einer hohen Führungsposition arbeitet und nicht erkannt werden möchte.`,
      },
      {
        kind: "offload_yes",
        text: `Ute legt sich zur Sicherheit eine kleine gedruckte Notiz in ihre Terminkladde, die sie beim Verlassen des Therapieraums üblicherweise in der Hand hat.`,
      },
      {
        kind: "offload_no",
        text: `Ute nimmt sich fest vor, beim Betreten des Wartebereichs daran zu denken.`,
      },
      {
        kind: "base",
        text: `Nach der vorherigen Sitzung steht Ute gedanklich noch bei einem belastenden Thema der vorherigen Patientin. Als sie den Wartebereich betritt`,
      },
      { kind: "offload_yes", text: `, ausnahmsweise ohne ihre Kladde,` },
      {
        kind: "base",
        text: `spricht sie Herrn L. reflexhaft mit seinem vollen Namen an.`,
      },
      {
        kind: "cons_low",
        text: `In der anschließenden Sitzung wirkt Herr L. leicht irritiert. Er berichtet, dass die Situation ihm „unangenehm“ gewesen sei, aber er bezweifle nicht grundsätzlich ihre Diskretion. Nach kurzer Klärung kann das therapeutische Gespräch regulär fortgesetzt werden.`,
      },
      {
        kind: "cons_high",
        text: `In der anschließenden Sitzung zeigt sich Herr L. deutlich verärgert. Er berichtet, die Situation sei ihm sehr unangenehm gewesen und er habe den Eindruck gehabt, dass eine andere wartende Person seinen Namen erkannt habe. Er äußert Zweifel daran, ob Ute sein Anliegen nach Diskretion und Datenschutz ausreichend ernst nehme und droht mit einer Anzeige.`,
      },
    ],
  },
  {
    id: 7,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Lara N. betreut an einem Samstagabend den 13-monatigen Ben. Die Eltern erklären ihr vor dem Weggehen, dass Ben in letzter Zeit versucht, sich an den Möbeln hochzuziehen – vor allem am niedrigen Wohnzimmertisch. Sie bitten Lara, jedes Mal, wenn Ben sich daran hochzieht, ein weiches Kissen davorzulegen, weil er dabei manchmal nach vorne rutscht.`,
      },
      {
        kind: "offload_yes",
        text: `Um daran zu denken, platziert Lara das Kissen gut sichtbar neben dem Tisch.`,
      },
      {
        kind: "offload_no",
        text: `Lara nimmt sich vor, daran zu denken, sobald sie sieht, dass Ben sich am Tisch hochziehen möchte`,
      },
      {
        kind: "base",
        text: `Im Laufe des Abends spielt Ben mit Bauklötzen, wechselt zwischen verschiedenen Spielsachen und krabbelt immer wieder durch das Wohnzimmer. Lara ist gleichzeitig damit beschäftigt, ein Puzzle aufzuräumen und eine kurze Nachricht auf ihrem Handy zu beantworten. Währenddessen steuert Ben auf den Wohnzimmertisch hin, was Lara in diesem Moment nicht hinterfragt. Ein paar Minuten später hört sie Poltern.`,
      },
      {
        kind: "cons_low",
        text: `Ben sitzt auf dem Boden und wirkt erschrocken, zeigt aber keine weiteren Anzeichen von Beschwerden. Weil Lara ein schlechtes Gewissen hat, erzählt sie Bens Eltern von dem Vorfall. Die reagieren ziemlich verärgert, machen sich Sorgen und beschließen, vorsichtshalber mit Ben ins Krankenhaus zu fahren.`,
      },
      {
        kind: "cons_high",
        text: `Ben sitzt auf dem Boden und weint. Er hat sich an der Stirn gestoßen und eine deutliche Platzwunde, woraufhin Lara den Rettungsdienst ruft.`,
      },
    ],
  },
  {
    id: 8,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Tom Z. soll an diesem Morgen seine Tochter Lina zur Kita bringen.`,
      },
      {
        kind: "offload_yes",
        text: `Da er das selten übernimmt, legt er ihren Kita-Rucksack gut sichtbar auf den Beifahrersitz, um daran erinnert zu werden.`,
      },
      {
        kind: "offload_no",
        text: `Da er das selten übernimmt, nimmt er sich vor, den ungewohnten Umweg nicht zu vergessen.`,
      },
      {
        kind: "base",
        text: `Tom fährt die übliche Strecke Richtung Arbeit. An einer roten Ampel nimmt er einen wichtigen Anruf seines Teams entgegen. Kurz darauf passiert er gedanklich abgelenkt den Kita-Abzweig, ohne es zu merken.`,
      },
      {
        kind: "offload_yes",
        text: `Beim Abbiegen rutscht Linas Rucksack auf den Boden und ist nicht mehr sichtbar.`,
      },
      {
        kind: "base",
        text: `Auch Lina schläft tief und macht keinen Laut. Tom fährt weiter zur Arbeit und vergisst dabei, dass seine Tochter im Auto sitzt.`,
      },
      {
        kind: "cons_low",
        text: `Etwa eine halbe Stunde später bemerkt ein Passant das schlafende Kleinkind auf dem Rücksitz. Die Polizei wird gerufen und öffnet das Fahrzeug. Lina scheint es gut zu gehen.`,
      },
      {
        kind: "cons_high",
        text: `Ein Passant bemerkt nach einiger Zeit das Kleinkind auf dem Rücksitz, das inzwischen bewusstlos im heißen Auto liegt. Die Polizei trifft schnell ein und befreit Lina gerade noch rechtzeitig.`,
      },
    ],
  },
  {
    id: 9,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Jonas T. verbringt den Nachmittag mit seinem demenzkranken Onkel, der nach einer kürzlich erfolgten Operation noch geschwächt ist und einen Mittagsschlaf hält. Sein Cousin bittet Jonas, sofort nachzusehen, sobald der Onkel wach wird, weil dieser beim Aufstehen seit der OP oft das Gleichgewicht verliert.`,
      },
      {
        kind: "offload_yes",
        text: `Jonas lässt die Schlafzimmertür geöffnet und richtet seinen Arbeitsplatz so aus, dass er die Tür direkt im Blick hat, um daran erinnert zu werden.`,
      },
      {
        kind: "offload_no",
        text: `Jonas arbeitet im Wohnzimmer im Homeoffice und nimmt sich vor, immer mal wieder nach seinem Onkel zu schauen. Während Jonas im Wohnzimmer arbeitet, erhält er einen wichtigen Kundenanruf und ist in die Beantwortung einiger wichtiger E-Mails vertieft, sodass er vergisst, gelegentlich nach seinem Onkel zu schauen.`,
      },
      {
        kind: "base",
        text: `Während Jonas im Wohnzimmer arbeitet, erhält er einen wichtigen Kundenanruf. Um seinen Onkel nicht zu stören, schließt er kurz die Wohnzimmertür. Nach dem Gespräch vergisst er jedoch, sie wieder zu öffnen und widmet sich konzentriert seinen Mails. Als der Onkel im Schlafzimmer aufwacht, kann Jonas die Geräusche nicht hören. Erst als er später ein dumpfes Geräusch im Flur wahrnimmt, erinnert er sich an seine Aufgabe.`,
      },
      {
        kind: "cons_low",
        text: `Als er ins Schlafzimmer eilt, findet er seinen Onkel am Boden sitzend.Der Onkel klagt über leichte Schmerzen im Handgelenk, das er sich beim Abstützen eventuell geprellt hat. Weitere Verletzungen liegen nicht vor, Jonas will das verletzte Handgelenk vorsichtshalber ärztlich abklären lassen.`,
      },
      {
        kind: "cons_high",
        text: `Als er ins Schlafzimmer eilt, findet er seinen Onkel am Boden sitzend. Dieser hält sich das Bein und wirkt schmerzgeplagt. Da sein Onkel sich kaum bewegen kann, ruft Jonas den Rettungsdienst.`,
      },
    ],
  },
  {
    id: 10,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Oskar G. verbringt den Nachmittag im Haus seiner Schwester und betreut ihren Hund Milo. Sie hat ihm erklärt, dass Milo manchmal sofort in Richtung Straße läuft, wenn die Terrassentür aufgeht, und dass er dann besonders aufpassen muss.`,
      },
      {
        kind: "offload_yes",
        text: `Um sich daran zu erinnern, hängt Oskar einen auffälligen roten Schlüsselanhänger direkt an den Türgriff.`,
      },
      {
        kind: "offload_no",
        text: `Oskar nimmt sich vor, beim Öffnen der Terrassentür bewusst darauf zu achten, wo Milo sich befindet.`,
      },
      {
        kind: "base",
        text: `Am Nachmittag bringt Oskar gedankenversunken den Biomüll nach draußen.`,
      },
      {
        kind: "offload_yes",
        text: `Obwohl der Anhänger gegen seine Finger schlägt, nimmt er ihn im Moment der Ablenkung nicht bewusst wahr`,
      },
      {
        kind: "base",
        text: `. Milo schlüpft unentdeckt hinaus und läuft auf die Straße.`,
      },
      {
        kind: "cons_low",
        text: `Ein Radfahrer, der gerade die Straße entlangfährt, macht eine Vollbremsung, weil er befürchtet, Milo könne weiter auf die Fahrbahn laufen. Er verfehlt den Hund knapp, gerät jedoch ins Wanken und stürzt zu Boden. Der Radfahrer bleibt unverletzt, jedoch trägt sein Fahrrad einen Sachschaden davon.`,
      },
      {
        kind: "cons_high",
        text: `Ein Radfahrer, der vorbeifährt, macht eine Vollbremsung, weil er Milo auf die Straße laufen sieht. Dabei verliert er das Gleichgewicht und stürzt auf den Asphalt und bricht sich den Arm.`,
      },
    ],
  },
  {
    id: 11,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Samuel H. passt an einem Samstagnachmittag auf den dreijährigen Matti in der Studiowohnung seiner Freunde auf. Während Matti spielt, befindet sich in der offenen Küche ein heißer Backofen mit einem Auflauf. Die Eltern hatten Samuel ausdrücklich darauf hingewiesen, dass Matti neuerdings nicht nur neugierig in die Küche läuft, sondern inzwischen sogar die Backofentür öffnen kann.`,
      },
      {
        kind: "offload_yes",
        text: `Um im entscheidenden Moment daran erinnert zu werden, stellt Samuel ein Babyphone mit aktivem Geräuschsensor auf die Küchenzeile, sodass er Mattis Schritte in Richtung Küche deutlich hören würde.`,
      },
      {
        kind: "base",
        text: `Während Samuel im Wohnzimmer, mit dem Rücken zur Küchenzeile, eine Kommode aufbaut, läuft Matti in Richtung Küche.`,
      },
      {
        kind: "offload_yes",
        text: `Das Babyphone gibt ein kurzes Geräusch ab, doch Samuel ist in den Aufbau vertieft und denkt in diesem Moment nicht mehr an den heißen Backofen.`,
      },
      {
        kind: "base",
        text: `Erst als Matti laut aufschreit, erinnert er sich an den Backofen. Er findet Matti weinend auf dem Boden sitzend;`,
      },
      {
        kind: "cons_low",
        text: `dieser hat von außen gegen die heiße Backofentür gefasst und eine leichte Verbrennung an der Handfläche erlitten.`,
      },
      {
        kind: "cons_high",
        text: `dieser hatte es geschafft, die Backofentür zu öffnen und an die heiße Auflaufform zu fassen. Samuel fährt sofort mit ihm ins Krankenhaus. Dort wird eine Verbrennung zweiten Grades an den Handinnenflächen festgestellt.`,
      },
    ],
  },
  {
    id: 12,
    domain: `Betreuungs-/Aufsichtspflicht`,
    segments: [
      {
        kind: "base",
        text: `Betreuerin Anastasia G. begleitet eine mehrtägige Jugendfreizeit. Der 10-jährige Jonas F. hat einen Typ-1-Diabetes und führt seine Insulinpumpe grundsätzlich selbstständig. Die Eltern und das Freizeitteam haben Anastasia jedoch darauf hingewiesen, dass Jonas besonders nach intensiven Tobespielen zu schnellen Blutzuckerabfällen neigt und manchmal vergisst, direkt danach eine Messung durchzuführen. Dort besteht das Risiko einer Hypoglykämie, wenn nicht rechtzeitig reagiert wird. Deshalb soll Anastasia immer dann, wenn die Gruppe nach einer intensiven Tobeeinheit wieder in den Aufenthaltsraum zurückkehrt, Jonas an die Blutzuckermessung erinnern und kurz sicherstellen, dass sie durchgeführt wird.`,
      },
      {
        kind: "offload_yes",
        text: `Anastasia stellt das Blutzuckermessgerät bewusst gut sichtbar auf den Tisch direkt neben der Tür, sodass sie es automatisch sieht, sobald die Gruppe wieder den Aufenthaltsraum betritt. Als die Kinder zurückkommen, stellt ein anderes Kind seinen Rucksack direkt vor das Messgerät. Anastasia nimmt es in diesem Moment nicht wahr und vergisst die Blutzuckermessung.`,
      },
      {
        kind: "offload_no",
        text: `Anastasia nimmt sich vor, den Blutzuckerwert direkt zu messen, sobald die Gruppe wieder den Aufenthaltsraum betritt. Als die Kinder zurückkommen ist Anastasia gerade mit einem Anliegen eines anderen Kindes beschäftigt und vergisst die Blutzuckermessung.`,
      },
      {
        kind: "base",
        text: `Später wirkt Jonas zunehmend blass und verwirrt, spricht langsamer und beginnt zu schwanken.`,
      },
      {
        kind: "cons_low",
        text: `Außerdem zittern seine Hände. Eine Messung zeigt einen deutlich zu niedrigen Blutzucker. Anastasia gibt ihm sofort Saft und etwas Glukosegel. Jonas braucht einige Minuten, bis er wieder klar reagieren kann, stabilisiert sich danach aber vollständig.`,
      },
      {
        kind: "cons_high",
        text: `Kurz darauf verliert er kurz das Gleichgewicht und stürzt. Eine Messung zeigt eine schwere Hypoglykämie. Während Anastasia ihm schnell Traubenzucker verabreicht, reagiert Jonas nur verzögert. Der Rettungsdienst wird gerufen. Jonas wird in der Notaufnahme stabilisiert und über mehrere Stunden überwacht. Der Vorfall wird als schwere akute Hypoglykämie mit Beinahe-Bewusstseinsverlust eingestuft und`,
      },
      {
        kind: "base",
        text: `Der Vorfall wird den Eltern berichtet, die mit einer Klage drohen.`,
      },
    ],
  },
  {
    id: 13,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Laura E. ist Laborassistentin in einem chemischen Forschungslabor. Auf einem zentralen Arbeitstisch führt sie eine laufende Analyse mit einer leicht reizenden Lösung durch, die während des Messvorgangs offenstehen muss. Die Laborleitung hat Laura darauf hingewiesen, dass die Auszubildende Mira I. jederzeit den Raum betreten kann, um Proben abzulegen. Da Mira nicht mit den spezifischen Gefahrstoffen vertraut ist, soll Laura, sobald Mira das Labor betritt, die Abzugshaube schließen und eine Schutzhaube auflegen.`,
      },
      {
        kind: "offload_yes",
        text: `Um daran erinnert zu werden, legt Laura die Schutzhaube gut sichtbar direkt vor die Apparatur an die Stelle, an die sie beim Zurückdrehen zum Arbeitstisch automatisch schaut.`,
      },
      {
        kind: "offload_no",
        text: `Laura nimmt sich vor, daran zu denken, sobald Mira den Raum betritt.`,
      },
      {
        kind: "base",
        text: `Im Verlauf des Vormittags arbeitet Laura an einem Analyserechner seitlich zum Arbeitstisch, als Mira den Raum betritt. Laura denkt in diesem Moment nicht an die offenstehende Analyse oder die erforderliche Schutzmaßnahme. Als sie sich kurz darauf umdreht, steht Mira bereits in der Nähe der Probenablage`,
      },
      { kind: "base", text: `und` },
      {
        kind: "cons_low",
        text: `hält etwas Abstand zum Arbeitstisch. Mira schaut kurz zur offenen Analyse und fragt: „Sollte das gerade abgedeckt sein? Ich war mir nicht sicher.“ Laura schließt sofort die Abzugshaube, legt die Abdeckung korrekt auf und weist Mira in den sicheren Bereich ein. Mira berichtet anschließend, dass sie nur einen leichten Geruch bemerkt habe, sich aber gut fühle. Da Laura gegen die Sicherheitsvorkehrungen verstoßen hat, muss sie den Vorfall intern melden.`,
      },
      {
        kind: "cons_high",
        text: `Mira blinzelt und reibt sich die Augen, ohne etwas zu sagen, und berichtet nach einem Moment Brennen in den Augen. Laura schließt sofort die Abzugshaube, legt die Schutzhaube auf und führt Mira aus dem Raum. Eine medizinische Untersuchung ergibt eine mäßige Reizung der Bindehaut infolge der Dampfexposition. Woraufhin Mira einige Wochen lang täglich Augentropfen verwenden muss und sehr helles Licht vermeiden sollte.`,
      },
    ],
  },
  {
    id: 14,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Louis W. ist Auszubildender im 1. Lehrjahr zum Koch und arbeitet in einer Großküche einer Gemeinschaftsverpflegung. Die Küchenmeisterin weist ihn an seinem ersten Arbeitstag an: Sobald die Pfannenwanne am Spülbecken abgekühlt ist, muss Louis das Bratfett in den vorgeschriebenen Fettsammelbehälter umfüllen. Das Fett darf nicht ins Spülbecken, da dies den Fettabscheider umgeht, gegen Umweltauflagen verstößt und zu Betriebsstörungen führen kann.`,
      },
      {
        kind: "offload_yes",
        text: `Louis platziert zur Sicherheit den Sammelbehälter direkt unter die Pfannenwanne und legt zusätzlich den vorgeschriebenen Kunststofftrichter oben auf die Wanne, sodass er ihn entfernen müsste, bevor er überhaupt etwas ausschüttet.`,
      },
      {
        kind: "offload_no",
        text: `Louis widmet sich zunächst anderen Aufgaben und nimmt sich vor, das Bratfett danach zu entsorgen.`,
      },
      {
        kind: "base",
        text: `Als er später zur Pfanne zurückkehrt, beantwortet er gleichzeitig eine Arbeitsfrage eines Kollegen.`,
      },
      {
        kind: "offload_yes",
        text: `Er legt gedankenversunken den Trichter beiseite`,
      },
      {
        kind: "base",
        text: `, denkt an den nächsten Arbeitsschritt und gießt das Restfett ins Spülbecken, spült die Pfanne und stellt sie weg.`,
      },
      {
        kind: "cons_low",
        text: `Am Folgetag wird bei der Routinekontrolle eine geringe Fettablagerung im Rohr festgestellt. Die Haustechnik entfernt sie und vermerkt den Zwischenfall im internen Protokoll.`,
      },
      {
        kind: "cons_high",
        text: `Am nächsten Morgen meldet die Haustechnik eine massive Fettverstopfung, die zu einem kurzfristigen Ausstieg mehrerer Spülbereiche führt. Ein Fachbetrieb muss hinzugezogen werden, und der Vorfall wird nach Umwelt- und Küchenbetriebsauflagen formal erfasst.`,
      },
    ],
  },
  {
    id: 15,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Lagerarbeiter Marius S. bereitet einen Sattelanhänger für die Entladung vor. Um die Ladebrücke abzusenken, entfernt er zwei Sicherungsstifte, die normalerweise die Rampe stabilisieren. Kurz darauf wird er von einem Kollegen um Hilfe gebeten. Er nimmt sich fest vor, beim Zurückkehren die Stifte sofort wieder einzusetzen, bevor jemand die Rampe befährt.`,
      },
      {
        kind: "offload_yes",
        text: `Als Gedächtnisstütze legt er die Stifte gut sichtbar auf die Ladefläche und befestigt ein rotes Warnband an der Rampe.`,
      },
      {
        kind: "offload_no",
        text: `Marius nimmt sich fest vor, beim Zurückkehren die Stifte sofort wieder einzusetzen, bevor jemand die Rampe befährt, und verlässt sich darauf, diesen Vorsatz sicher im Kopf zu behalten.`,
      },
      {
        kind: "base",
        text: `Nach der Unterbrechung kehrt Marius zurück, während die Fahrerin bereits mit dem Hubwagen an den Anhänger heranfährt.`,
      },
      {
        kind: "offload_yes",
        text: `In der Routine des Ablaufs entfernt er das Warnband, ohne in diesem Moment seinen ursprünglichen Vorsatz abzurufen.`,
      },
      {
        kind: "offload_no",
        text: `In der Routine des Ablaufs gibt er die Entladung frei, ohne in diesem Moment an den fehlenden Stiftsatz zu denken.`,
      },
      {
        kind: "cons_low",
        text: `Die Fahrerin fährt mit dem Hubwagen auf die Rampe, die aufgrund der fehlenden Stifte leicht nachgibt, sodass der Hubwagen etwas kippt und die Fahrerin sich dabei das Schienbein an der Metallkante stößt. Sie erleidet eine leichte Prellung.`,
      },
      {
        kind: "cons_high",
        text: `Die Fahrerin fährt mit dem Hubwagen auf die Rampe, die aufgrund der fehlenden Stifte deutlich nachgibt und seitlich wegkippt. Sie verliert das Gleichgewicht, stürzt vom Hubwagen und schlägt auf der Asphaltfläche auf. Sie erleidet eine schmerzhafte Verstauchung des Sprunggelenks sowie eine Fraktur des Handgelenks, die medizinisch versorgt werden muss.`,
      },
    ],
  },
  {
    id: 16,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Fahrer Armin H. führt eine reguläre Auslieferungstour mit einem Transporter durch. Bei einem Zwischenstopp nimmt er unerwartet eine zusätzliche Palette Retouren auf und löst dafür einige der Zurrgurte.`,
      },
      {
        kind: "offload_yes",
        text: `Um nicht zu vergessen, die Gurte wieder vollständig zu sichern, sobald alle Pakete verstaut sind, legt er einen der gelösten Zurrgurte sichtbar quer über die hintere Einstiegstufe, sodass er ihn beim Schließen der Tür bemerken müsste.`,
      },
      {
        kind: "offload_no",
        text: `. Er nimmt sich vor, sobald alle Pakete verstaut sind, die Gurte wieder vollständig zu sichern.`,
      },
      {
        kind: "base",
        text: `Während er die Pakete sortiert, erhält er den Anruf zur geänderten Lieferadresse. Nach dem Telefonat schließt er automatisiert die Türen`,
      },
      {
        kind: "offload_yes",
        text: `— der Reminder befindet sich in diesem Moment unter einer Paketkante und wird nicht bewusst wahrgenommen.`,
      },
      {
        kind: "offload_no",
        text: `Nach dem Telefonat schließt er automatisiert die Türen und fährt los,`,
      },
      {
        kind: "base",
        text: `Armin fährt los, ohne die Sicherung nachzuziehen. Auf einer Gefällstrecke rutscht die ungesicherte Palette nach vorne. Beim Entladen an der nächsten Filiale öffnet eine Mitarbeiterin die Hecktüren.`,
      },
      {
        kind: "cons_low",
        text: `Durch die Verschiebung lösen sich mehrere Kartons und bewegen sich nach vorne. Eine scharfkantige Kartonecke ritzt ihr dabei das Schienbein auf, sodass eine blutende, oberflächliche Schnittverletzung entsteht. Die Wunde wird vor Ort versorgt, die Mitarbeiterin kann weiterarbeiten.`,
      },
      {
        kind: "cons_high",
        text: `Durch die Verschiebung kippt die instabile Palette plötzlich an und mehrere Kartons rutschen mit Schwung heraus. Einer der schweren Kartons trifft die Mitarbeiterin am Schienbein und verursacht eine tiefe Platzwunde, die stark blutet. Durch den Aufprall verliert sie das Gleichgewicht und stürzt nach hinten, wobei sie sich zusätzlich das Handgelenk verstaucht. Die Verletzungen führen zu einer mehrtägigen Arbeitsunfähigkeit.`,
      },
    ],
  },
  {
    id: 17,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Reinigungskraft Lars B. arbeitet in einer Logistikhalle und soll zum Schichtbeginn den Hauptdurchgang reinigen. Er räumt zunächst lose Verpackungsreste beiseite, bevor er mit dem Nasswischen beginnen kann. Das Warnschild wird normalerweise erst aufgestellt, wenn der Nasswischvorgang tatsächlich beginnt. Während dieser Vorbereitung spricht ihn ein Kollege an und bittet ihn um kurze Hilfe beim Öffnen eines Rolltors, da dessen Mechanismus klemmt.`,
      },
      {
        kind: "offload_yes",
        text: `Lars möchte sicherstellen, dass er das Warnschild nach der Rückkehr nicht vergisst und stellt es daher seitlich sichtbar bereit, sodass er es nur noch in den Durchgang schieben muss. Zusätzlich lehnt er den Wischmopp so an, dass er ihn normalerweise erst nach dem Platzieren des Schildes greifen würde.`,
      },
      {
        kind: "offload_no",
        text: `Lars nimmt sich vor, sobald er zum Durchgang zurückkehrt und mit dem Nasswischen beginnt, das Warnschild an der üblichen Stelle zu platzieren`,
      },
      {
        kind: "base",
        text: `Nach der kurzen Hilfeleistung kehrt er in den Bereich zurück. Er sieht eine ankommende Warenlieferung und konzentriert sich kurz auf die veränderte Hallensituation.`,
      },
      { kind: "offload_yes", text: `Instinktiv rückt er den Mopp zurecht und` },
      {
        kind: "base",
        text: `beginnt zu wischen, ohne das Schild zu platzieren.`,
      },
      {
        kind: "cons_low",
        text: `Ein Mitarbeiter betritt die Fläche, rutscht leicht weg und stützt sich ab. Er zieht sich eine leichte Prellung am Unterarm zu, jedoch keine Arbeitsunfähigkeit verursacht.`,
      },
      {
        kind: "cons_high",
        text: `Ein Mitarbeiter betritt die Fläche, rutscht nach hinten weg und stößt ungedämpft mit dem Kopf auf dem Boden auf. Er muss wegen einer Gehirnerschütterung ins Krankenhaus und ist zwei Wochen arbeitsunfähig.`,
      },
    ],
  },
  {
    id: 18,
    domain: `Arbeits- und Betriebssicherheit`,
    segments: [
      {
        kind: "base",
        text: `Elektronikerin Mara K. und ihr Gehilfe Leon P. sollen in einer Werkhalle eine defekte Steckdosenleiste ausbauen. Dafür muss der zugehörige Stromkreis abgeschaltet werden. Mara weist Leon an, den Schalter am Sicherungskasten umzulegen, bevor sie mit dem Ausbau beginnt. Kurz bevor Leon dies tun kann, wird er von einem Kollegen gebeten, beim Tragen eines schweren Geräts zu helfen.`,
      },
      {
        kind: "offload_yes",
        text: `Um nicht zu vergessen, den Stromkreis abzuschalten, sobald er wieder am Sicherungskasten steht, legt er den Sicherungsschlüssel gut sichtbar auf den Sicherungskasten und markiert den betreffenden Schalter mit einem gelben Hinweisstreifen. Nach der Unterbrechung kehrt er zurück, wird jedoch durch eine Materialanfrage angesprochen und übersieht beide Erinnerungen.`,
      },
      {
        kind: "offload_no",
        text: `Leon nimmt sich fest vor, sobald er wieder am Sicherungskasten steht, den Stromkreis abzuschalten.`,
      },
      {
        kind: "cons_low",
        text: `Mara geht davon aus, dass der Stromkreis abgeschaltet wurde, beginnt den Ausbau und verspürt beim Anheben der Frontplatte einen kurzen elektrischen Impuls, der zu einer leichten Kontaktverbrennung führt.`,
      },
      {
        kind: "cons_high",
        text: `Mara geht davon aus, dass der Stromkreis abgeschaltet wurde und beginnt den Ausbau. Beim Kontakt mit einem aktiven Leiter erhält sie einen Stromschlag. Der elektrische Impuls führt zu einem unwillkürlichen Muskelzucken, wodurch ihre Hand gegen scharfkantiges Metall schlägt. Sie erleidet eine tiefere Kontaktverbrennung an den Fingern sowie eine schmerzhafte Zerrung der Unterarmmuskulatur infolge der Stromeinwirkung.`,
      },
      {
        kind: "offload_no",
        text: `Nach der Unterbrechung kehrt er zurück, wird jedoch durch eine Materialanfrage angesprochen und vergiss den Stromkreis abzuschalten.`,
      },
    ],
  },
  {
    id: 19,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Elif D. bemerkt eines Abends beim Fahren, dass ihr Auto auf unebenen Straßen ein ungewöhnliches Geräusch macht – ein dumpfes Knacken in der Vorderachse. Da die Werkstätten bereits geschlossen sind und sie das Auto in den nächsten Tagen nur wenig benötigt, nimmt sie sich vor, es zwei Tage später, wenn sie frei hat, in die Werkstatt zu bringen.`,
      },
      {
        kind: "offload_yes",
        text: `Um sich daran zu erinnern, schreibt Elif „Werkstatt!“ auf einen gelben Notizzettel und klebt ihn innen an die Wohnungstür, damit er ihr beim Hinausgehen sofort auffällt. Dieser löst sich allerdings unbemerkt von der Tür und fällt zu Boden.`,
      },
      {
        kind: "offload_no",
        text: `nimmt sie sich vor, es zwei Tage später, wenn sie frei hat, in die Werkstatt zu bringen.`,
      },
      {
        kind: "base",
        text: `An ihrem freien Tag bekommt sie überraschend Besuch von einer alten Schulfreundin. Die beiden verbringen den gesamten Tag miteinander, und Elif denkt kein einziges Mal an ihren Vorsatz. Am nächsten Morgen muss sie zu einem wichtigen Geschäftstermin. In der Eile steigt sie ins Auto, ohne an das Knacken zu denken. Die Fahrt verläuft zunächst auf ebener Strecke unauffällig. Doch als sie ein Schlagloch überfährt, bricht eine Feder der Vorderachse vollständig.`,
      },
      {
        kind: "cons_low",
        text: `Das Auto zieht nach rechts, Elif verliert kurz die Kontrolle und streift einen Fahrradfahrer. Dieser stürzt und erleidet eine oberflächliche Schürfwunde am Bein.`,
      },
      {
        kind: "cons_high",
        text: `Doch als sie in ein Schlagloch gerät, bricht eine Feder der Vorderachse, und das Fahrzeug zieht abrupt nach rechts. Elif verliert die Kontrolle und prallt seitlich gegen einen Fahrradfahrer. Er stürzt heftig zu Boden und erleidet mehrere Knochenbrüche, die stationär behandelt werden müssen.`,
      },
    ],
  },
  {
    id: 20,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Nikoletta K. nutzt auf dem Weg zur Universität einen E-Scooter. Beim Absteigen bemerkt sie, dass der rechte Bremshebel ungewöhnlich locker ist und nachgibt.`,
      },
      {
        kind: "offload_yes",
        text: `Um vor der nächsten Fahrt daran erinnert zu werden, die Fixierschraube nachzuziehen, legt sie ihr Multitool gut sichtbar neben ihren E-Scooter-Schlüssel auf das Regal im Flur. Während Nikoletta sich umzieht, räumt ihr Freund die Wohnung auf. Er sieht das Multitool an der ungewöhnlichen Stelle und legt es ordnungsgemäß in die Werkzeugschublade – ohne zu wissen, dass es als Erinnerung dienen sollte.`,
      },
      {
        kind: "offload_no",
        text: `Sie nimmt sich vor, die lockere Fixierschraube vor der nächsten Fahrt nachzuziehen.`,
      },
      {
        kind: "base",
        text: `Als Nikoletta später den Scooter erneut nutzt, ist sie durch eine eingehende Nachricht gedanklich abgelenkt und erinnert sich in diesem Moment nicht mehr an ihren Vorsatz. Sie fährt los, ohne den Bremshebel zu kontrollieren.`,
      },
      {
        kind: "base",
        text: `Beim Heranfahren an einen Fußgängerüberweg bremst sie, doch der lockere Bremshebel reagiert verzögert.`,
      },
      {
        kind: "cons_low",
        text: `Nikoletta kommt knapp vor einer Frau zum Stehen, die gerade den Übergang betreten wollte. Die Frau erschrickt, weicht reflexartig zurück, stolpert und stürzt. Dabei erleidet sie eine oberflächliche Schürfwunde an der Hand, die vor Ort versorgt wird.`,
      },
      {
        kind: "cons_high",
        text: `Nikoletta stößt mit einer älteren Frau zusammen, die gerade den Überweg überquert. Die Frau fällt zu Boden und erleidet einen Oberschenkelhalsbruch, der im Krankenhaus behandelt werden muss.`,
      },
    ],
  },
  {
    id: 21,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Die 19-jährige Marta V. holt ihr Auto nach einer Inspektion aus der Werkstatt ab. Ihr Vater hatte ihr vorab erklärt, dass bei solchen Inspektionen häufig sämtliche Fahrzeugeinstellungen auf Werkseinstellungen zurückgesetzt werden, darunter auch die Lichtsteuerung, die sonst automatisch aktiviert wird.`,
      },
      {
        kind: "offload_yes",
        text: `Um nicht zu vergessen, die Lichter nach dem Werkstattbesuch wieder auf Automatik zu stellen, richtet Nele auf ihrem Handy einen zeitnahen Reminder ein. Als sie einsteigt, hat sie ihr Handy in ihrer Tasche und bemerkt nicht das Vibrieren. Marta vergisst ihren Vorsatz und fährt mit der Werkeinstellung los.`,
      },
      {
        kind: "offload_no",
        text: `Marta nimmt sich vor, sobald sie losfährt, die Lichtautomatik wieder einzuschalten. Als sie einsteigt, vergisst sie ihren Vorsatz und fährt mit der Werkeinstellung los.`,
      },
      {
        kind: "base",
        text: `In der beginnenden Dämmerung fällt ihr nicht auf, dass sie ohne Scheinwerfer fährt. Kurz darauf`,
      },
      { kind: "cons_low", text: `muss sie stark abbremsen` },
      { kind: "cons_high", text: `führt sie eine Vollbremsung durch,` },
      {
        kind: "base",
        text: `, weil ein Reh vor ihr unerwartet die Straße überquert.`,
      },
      {
        kind: "cons_low",
        text: `Ein nachfolgendes Auto erkennt Martas Fahrzeug zu spät und fährt leicht auf. Die Fahrerin des hinteren Fahrzeugs erleidet eine leichte Halswirbelsäulenverspannung.`,
      },
      { kind: "cons_high", text: `führt sie eine Vollbremsung durch,` },
    ],
  },
  {
    id: 22,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Serdar F. ist ehrenamtlicher Feuerwehrmann und war am Nachmittag im Bereitschaftsdienst auf der Wache. Dafür trägt er einen digitalen Meldeempfänger, der bei Alarm einen sehr lauten, schrillen Signalton auslöst. Nach Dienstende muss das Gerät manuell in den Ruhemodus versetzt werden.`,
      },
      {
        kind: "offload_yes",
        text: `Um dies nicht zu vergessen, arbeitet Serdar üblicherweise eine kurze Checkliste auf seinem Smartphone ab, die alle Schritte nach Dienstende enthält, darunter auch das Deaktivieren des Meldeempfängers.`,
      },
      {
        kind: "offload_no",
        text: `Serdar nimmt sich vor den Meldeempfänger vor der Heimatfahrt auszuschalten, da der Alarmton während der Fahrt stark ablenken kann.`,
      },
      {
        kind: "base",
        text: `Kurz vor Dienstende erhält Serdar jedoch einen Anruf von seiner hochschwangeren Frau, die ihm mitteilt, dass die Wehen eingesetzt haben. Serdar ist stark aufgeregt, verlässt die Wache hastig und denkt in diesem Moment`,
      },
      { kind: "offload_yes", text: `weder an die Checkliste noch` },
      { kind: "offload_no", text: `nicht` },
      {
        kind: "base",
        text: `an den Meldeempfänger. Während der Fahrt durch den innerstädtischen Verkehr löst der Meldeempfänger plötzlich eine lauten Alarm aus. Serdar erschrickt stark, greift nach dem Gerät und übersieht dabei eine rote Ampel.`,
      },
      {
        kind: "cons_low",
        text: `Er bremst noch stark ab, kann jedoch eine Kollision nicht vollständig vermeiden und streift eine Fußgängerin, die gerade die Straße überquert. Die Frau verliert das Gleichgewicht, stürzt auf den Rücken und zieht sich eine schmerzhafte Rückenprellung sowie Abschürfungen an den Händen zu. Sie wird vor Ort medizinisch untersucht und ambulant versorgt.`,
      },
      {
        kind: "cons_high",
        text: `Es kommt zu einer Kollision mit einer Fußgängerin, die gerade die Straße überquert. Die Frau erleidet mehrere Knochenbrüche und innere Blutungen. Siewird sofort in die Notaufnahme gefahren.`,
      },
    ],
  },
  {
    id: 23,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Trainer Sebastian P. fährt mit seinem Auto eine U-17-Mannschaft zu einem Auswärtsspiel. Der Anschnall-Signalton seines Fahrzeugs ist seit einiger Zeit defekt. Sebastian weiß aus Erfahrung, dass sich einzelne Spieler während der Fahrt nicht immer freiwillig anschnallen.`,
      },
      {
        kind: "offload_yes",
        text: `Um vor der Abfahrt daran zu denken, dies noch einmal zu kontrollieren, klebt er sich einen Zettel mit der Aufschrift „Alle angeschnallt?“ an das Armaturenbrett.`,
      },
      {
        kind: "offload_no",
        text: `Er nimmt sich vor, vor der Abfahrt noch einmal zu kontrollieren, ob alle angeschnallt sind.`,
      },
      {
        kind: "base",
        text: `Am Treffpunkt erscheinen einige Spieler verspätet, wodurch Zeitdruck entsteht. In der Hektik des Losfahrens`,
      },
      {
        kind: "offload_yes",
        text: `nimmt Sebastian den Zettel nicht bewusst wahr und`,
      },
      { kind: "base", text: `vergisst, die Anschnallpflicht zu überprüfen.` },
      {
        kind: "cons_low",
        text: `An einer Kreuzung muss Sebastian plötzlich stark abbremsen. Ein nicht angeschnallter Spieler rutscht nach vorne und schlägt mit dem Kopf gegen die Rückenlehne des Vordersitzes. Er ist kurz benommen und klagt über Kopfschmerzen. In der Notaufnahme wird eine leichte Gehirnerschütterung diagnostiziert. Die ambulant behandelt wird.`,
      },
      {
        kind: "cons_high",
        text: `An einer Kreuzung muss Sebastian plötzlich eine Vollbremsung durchführen. Ein nicht angeschnallter Spieler wird nach vorne geschleudert, schlägt mit dem Oberkörper gegen den Vordersitz und verdreht sich dabei stark. Er klagt sofort über starke Schmerzen im Schulter- und Nackenbereich. Im Krankenhaus wird eine Schlüsselbeinfraktur mit begleitender Halswirbelsäulenverletzung festgestellt. Der Spieler fällt mehrere Wochen aus und muss physiotherapeutisch behandelt werden.`,
      },
    ],
  },
  {
    id: 24,
    domain: `Verkehr & öffentliche Mobilität`,
    segments: [
      {
        kind: "base",
        text: `Gabriela K. fährt am frühen Abend auf einer Landstraße, als ihr Fahrzeug plötzlich ruckelt und an Leistung verliert. Sie kann das Auto kontrolliert an den rechten Fahrbahnrand lenken, jedoch nur teilweise auf den schmalen Seitenstreifen. Der Warnblinker ist eingeschaltet. Garbriela weiß, dass sie in dieser Situation zusätzlich ein Warndreieck aufstellen muss, um den nachfolgenden Verkehr rechtzeitig zu warnen.`,
      },
      {
        kind: "offload_yes",
        text: `Da sie zunächst den Pannendienst informieren möchte, nimmt sie das zusammengefaltete Warndreieck bereits aus dem Handschuhfach und legt es gut sichtbar auf den Beifahrersitz. Während des Telefonats holt sie bereits die Fahrzeugpapiere heraus und legt diese ebenfalls auf den Beifahrersitz, sodass das Warndreieck verdeckt wird.`,
      },
      {
        kind: "offload_no",
        text: `Da sie zunächst den Pannendienst informieren möchte, will sie, sobald sie das Telefonat beendet hat und aus dem Auto aussteigt, das Warndreieck hinter dem Fahrzeug aufzustellen.`,
      },
      {
        kind: "base",
        text: `Nach dem Gespräch bleibt Gabriela im Fahrzeug sitzen und denkt nicht mehr daran, das Warndreieck aufzustellen.`,
      },
      {
        kind: "cons_low",
        text: `Ein nachfolgender Fahrer erkennt das Hindernis zu spät, weicht abrupt aus und gerät ins Schleudern. Das Fahrzeug kommt von der Fahrbahn ab und fährt in den Graben. Durch die Erschütterung klagt er über Nacken- und Kopfschmerzen.`,
      },
      {
        kind: "cons_high",
        text: `Ein nachfolgender Fahrer erkennt das Hindernis zu spät, weicht abrupt aus und gerät ins Schleudern. Das Fahrzeug kommt von der Fahrbahn ab und prallt gegen einen Leitpfosten. Durch den aufgehenden Airbag bricht er sich die Nase und erleidet eine schwere Gehirnerschütterung.`,
      },
    ],
  },
  {
    id: 25,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Max B. arbeitet seit drei Jahren in einer Firma, die chemische Stoffe verarbeitet. Eine seiner regelmäßigen Aufgaben ist es, nach Produktionsschluss ein Ventil zu schließen, damit keine Restchemikalien in das Abwasser gelangen. An einem Tag ist der Ablauf besonders hektisch.`,
      },
      {
        kind: "offload_yes",
        text: `Max setzt sich vor Schichtbeginn bewusst eine Erinnerung auf seinem Diensthandy, um nicht zu vergessen, das Ventil zu schließen.`,
      },
      {
        kind: "offload_no",
        text: `Max denkt zwar kurz daran, dass er das Ventil später schließen muss, verlässt sich jedoch darauf, dass er es nicht vergessen wird.`,
      },
      {
        kind: "base",
        text: `Als das Schichtende naht, wird er in ein Gespräch mit einem Kollegen verwickelt.`,
      },
      {
        kind: "offload_yes",
        text: `Sein Handy löst zwar später die Erinnerung aus, doch Max übersieht die Nachricht verlässt das Gelände, ohne das Ventil zu schließen.`,
      },
      { kind: "offload_no", text: `und vergisst die Aufgabe vollständig.` },
      {
        kind: "cons_low",
        text: `Über Nacht gelangen Schadstoffe in das Abwassersystem. Die Konzentration liegt zwar nur leicht über den gesetzlichen Grenzwerten, jedoch besteht ein Gesundheitsrisiko für Anwohner, die informiert und vorsorglich gewarnt werden.`,
      },
      {
        kind: "cons_high",
        text: `Über Nacht gelangen große Mengen Schadstoffe in einen nahegelegenen Fluss, aus dem eine Gemeinde Trinkwasser bezieht. Mehrere Menschen erleiden starke gesundheitliche Beschwerden und müssen ärztlich behandelt werden.`,
      },
    ],
  },
  {
    id: 26,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Alex H. ist mit Freunden in einem Waldgebiet unterwegs. Als sie an ihrem Ziel ankommen, entzünden sie auf einer ausgewiesenen Feuerstelle ein Lagerfeuer. Alex denkt früh daran, dass das Feuer vor dem Verlassen des Waldes vollständig gelöscht werden muss`,
      },
      {
        kind: "offload_yes",
        text: `. Da sie planen, sobald es dunkel wird zu gehen, stellt er sich direkt zu Beginn des Abends einen Wecker auf 21:30 Uhr, um nicht zu vergessen, die Glut zu löschen. Im Laufe des Abends ist Alex in Gespräche vertieft und schenkt dem Thema keine weitere Aufmerksamkeit.Als es dunkel wird, verlassen sie den Wald. Der Wecker, den sich Alex gestellt hatte, ging aufgrund des leeren Handyakkus nicht an.`,
      },
      {
        kind: "offload_no",
        text: `Er setzt sich keine Erinnerung, da er sich darauf verlässt später daran zu denken. Im Laufe des Abends ist Alex H. in ein Gespräch vertieft und vergisst die Aufgabe vollständig`,
      },
      {
        kind: "base",
        text: `Das Feuer ist zu diesem Zeitpunkt bereits heruntergebrannt, jedoch glimmen noch deutlich sichtbare Glutreste in der Feuerstelle. Alex verlässt den Ort, ohne die Glut zu löschen.`,
      },
      {
        kind: "cons_low",
        text: `In der Nacht entzünden sich Glutreste erneut und verursachen einen kleineren Brand, der schnell gelöscht werden kann. Es kommt zu keinem Personenschaden, jedoch entsteht Sachschaden, und es besteht eine konkrete Gefahr für Menschen im Wald.`,
      },
      {
        kind: "cons_high",
        text: `In der Nacht fachen Windböen die Glut wieder an. Es entsteht ein großflächiger Waldbrand, der auf Wohngebiete übergreift. Mehrere Menschen erleiden Rauchvergiftungen und müssen medizinisch behandelt werden.`,
      },
    ],
  },
  {
    id: 27,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Lisa Z. arbeitet an einem Samstag in ihrer heimischen Garage an ihrem Auto. Beim Ölwechsel achtet sie sorgfältig darauf, das Altöl in die Altölkanne ablaufen zu lassen.`,
      },
      {
        kind: "offload_yes",
        text: `Bereits bevor sie mit dem Ölwechsel beginnt, legt sie die Kanne gut sichtbar auf den Boden, direkt neben die Garagenwand. So möchte sie sich daran erinnern, das Öl später zur Entsorgungsstelle zu bringen.`,
      },
      {
        kind: "offload_no",
        text: `Sie möchte das Altöl später fachgerecht an einer Entsorgungsstelle entsorgen und verlässt sich auf ihr Gedächtnis nach Beendigung ihrer Arbeit daran zu denken.`,
      },
      {
        kind: "base",
        text: `Während sie das Auto wieder zusammenbaut, klingelt das Telefon. Lisa telefoniert längere Zeit, ist vertieft im Gespräch und denkt nicht weiter an das Altöl. Als sie später die Garage verlässt, vergisst sie, die Kanne zu entsorgen und zu verschließen.`,
      },
      {
        kind: "cons_low",
        text: `Über Nacht tropfen geringe Mengen Altöl aus der Kanne und gelangen in den Randbereich der Garagenauffahrt. Am nächsten Morgen bemerkt ein Nachbar einen deutlichen Ölfilm, der langsam in die Regenrinne abläuft, und verständigt die örtliche Umweltstelle. Der betroffene Bodenabschnitt muss mit Ölbindemittel behandelt und ein kleines Stück Erdreich ausgetauscht werden.`,
      },
      {
        kind: "cons_high",
        text: `Über Nacht läuft durch Regen das Öl auf den Boden und gelangt in den Garten sowie in das nahegelegene Grundwasser. Mehrere Vögel und Kleintiere erkranken durch das Öl, Nachbarn berichten über Geruchsbelästigung, und das Umweltamt leitet ein Verfahren ein.`,
      },
    ],
  },
  {
    id: 28,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Sophie P. verbringt einen Samstagvormittag in ihrem Schrebergarten. Sie möchte die Pflanzen vor Schädlingen schützen und verwendet dafür ein handelsübliches Pestizid.`,
      },
      {
        kind: "offload_yes",
        text: `Zu Beginn stellt sie die Flasche gut sichtbar auf den Gartentisch und klebt einen Zettel mit der Aufschrift „Wegräumen“ daran, damit sie sich später daran erinnert, die Flasche nach der Anwendung sicher zu verschließen und wegzuräumen.`,
      },
      {
        kind: "offload_no",
        text: `Sie nimmt sich fest vor, die Flasche nach der Arbeit sicher zu verschließen, und vertraut darauf, dass sie daran denken wird.`,
      },
      {
        kind: "base",
        text: `Während sie die Pflanzen sprüht, klingelt ihr Handy. Sophie telefoniert längere Zeit und ist im Gespräch vertieft, sodass sie das Verschließen der Pestizidflasche vergisst. Nachdem sie die Gartenarbeit beendet hat, verlässt sie den Schrebergarten.`,
      },
      {
        kind: "cons_low",
        text: `Über Nacht gelangt ein kleiner Rest Pestizid auf den Boden. Es entstehen nur minimale Umwelteinwirkungen, keine Tiere oder Kinder werden geschädigt, dennoch stuft das Umweltamt den Vorfall als Verstoß ein.`,
      },
      {
        kind: "cons_high",
        text: `Über Nacht wirft eine Katze die Pestizidflasche um und dadurch gelangen größere Mengen des Pestizids auf den Boden und in angrenzende Beete. Ein benachbartes Kaninchengehege wird kontaminiert, mehrere Tiere erkranken schwer. Außerdem spielt ein Kind in der Nähe, kommt mit dem Pestizid in Kontakt und muss medizinisch behandelt werden. Das Umweltamt wird eingeschaltet.`,
      },
    ],
  },
  {
    id: 29,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Markus F. arbeitet an einem Donnerstagmittag im Chemielabor seines Unternehmens. Er muss mehrere Chemikalienreste nach Abschluss von Experimenten korrekt entsorgen.`,
      },
      {
        kind: "offload_yes",
        text: `Um sicherzugehen, dass er die Chemikalien ordnungsgemäß zur Sammelstelle bringt, klebt er ein Post-it direkt auf die Chemikalienflasche mit dem Hinweis: „Chemikalienreste unbedingt nach Gebrauch zur Sammelstelle bringen!“`,
      },
      {
        kind: "offload_no",
        text: `Er nimmt sich fest vor, die Chemikalienreste nach Abschluss der Arbeit ordnungsgemäß zur Sammelstelle zu bringen und verlässt sich dabei auf sein Gedächtnis.`,
      },
      {
        kind: "base",
        text: `Während er die Proben bearbeitet, kommt ein Kollege und bittet ihn um kurzfristige Hilfe bei einem anderen Experiment. Markus hilft, ist längere Zeit beschäftigt und vergisst dadurch, die Chemikalienreste wie geplant zur Sammelstelle zu bringen.`,
      },
      {
        kind: "cons_low",
        text: `Ein kleiner Rest gelangt auf den Laborboden, wird aber noch am selben Tag bemerkt und ordnungsgemäß entsorgt. Ein paar Laborgeräte werden geschädigt, und das Umweltamt stuft den Vorfall als Verstoß ein.`,
      },
      {
        kind: "cons_high",
        text: `Über Nacht gelangen die Chemikalien auf den Boden und in das Abwassersystem. Mehrere Laborgeräte werden beschädigt, Reinigungsmitarbeiter erleiden gesundheitliche Beschwerden, und das Unternehmen muss das Umweltamt informieren.`,
      },
    ],
  },
  {
    id: 30,
    domain: `Umweltschutz`,
    segments: [
      {
        kind: "base",
        text: `Anna S. arbeitet an einem Montagvormittag im Produktionsbereich eines Industrieunternehmens. Sie bereitet die Maschinen für den nächsten Produktionsdurchlauf vor. Zu ihren Aufgaben gehört es, die Filteranlage für die Abluft einzuschalten, sobald die Maschine gestartet wird.`,
      },
      {
        kind: "offload_yes",
        text: `Um sicherzugehen, dass sie daran denkt, befestigt sie einen gut sichtbaren Hinweiszettel direkt am Bedienpult mit der Aufschrift: „Filteranlage einschalten – Umweltschutz!“.`,
      },
      {
        kind: "offload_no",
        text: `Sie nimmt sich fest vor, daran zu denken, die Filteranlage einzuschalten, und verlässt sich dabei auf ihr Gedächtnis.`,
      },
      {
        kind: "base",
        text: `Kurz bevor sie die Produktion starten möchte, spricht ein Kollege sie an und bittet sie dringend um Unterstützung bei einer anderen Aufgabe. Anna hilft ihm und ist eine Weile abgelenkt. Als sie später zur Maschine zurückkehrt, übersieht sie ihren Hinweiszettel und startet sie die Produktion, ohne noch an die Filteranlage zu denken.`,
      },
      {
        kind: "cons_low",
        text: `Der Fehler wird jedoch nach kurzer Zeit bemerkt und korrigiert. Es gelangt nur eine geringe Menge Feinstaub in die Luft, ohne gesundheitliche Schäden für Personen. Dennoch vermerkt das Umweltamt einen geringfügigen Verstoß.`,
      },
      {
        kind: "cons_high",
        text: `Über mehrere Stunden gelangen gesundheitsgefährdende Feinstäube ungefiltert in die Umgebungsluft. In der Nachbarschaft kommt es bei mehreren Personen zu Atemwegsbeschwerden, und eine nahegelegene Kita muss das Außengelände sperren, um eine Gefährdung der Kinder zu verhindern. Das Unternehmen ist verpflichtet, das Umweltamt zu informieren, welches daraufhin ein Ermittlungsverfahren einleitet.`,
      },
    ],
  },
];
