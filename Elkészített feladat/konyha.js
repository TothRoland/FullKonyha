const kivalaszt = () => {
    const etelek = [
        { nev: "Gulyás", img: "kepek/gulyas.jpg", leiras: "A gulyás nagyon népszerű magyar leves. Nagy marhahúsdarabokat, krumplit, zöldségeket, egy kevés paprikát és csípőset tartalmaz.", link: "https://www.youtube.com/watch?v=h-VDJTm8UAA"},
        { nev: "Halászlé", img: "kepek/halaszle.jpg", leiras: "Hagyományos magyar halászlé, ami paprikával ízesített halléből és vastag folyami halszeletekből áll. Annak ellenére, hogy meglehetősen egyszerűnek tűnik, nagyon finom. A halászlevet hagyományosan a szabadban készítik, frissen fogott halból.", link: "https://www.youtube.com/watch?v=RgrZLBhbiAw"},
        { nev: "Lángos", img: "kepek/langos.jpg", leiras: "Egy tányér méretű sült tészta, amire tejfölt és sajtot halmoznak. Extra feltétként szolgálhat a fokhagyma, de manapság már ha egy igazi kalóriabombát szeretnénk, nutellás lángost is árulnak.", link: "https://www.youtube.com/watch?v=6ZJxWdIegIg"},
        { nev: "Borsófőzelék", img: "kepek/borsofozelek.jpg", leiras: "A főzelékek általában úgy készülnek, hogy sós lében megfőzik a zöldséget, a levet besűrítik, majd sóval és fűszerekkel ízesítik. A sűrítés történhet habarással és rántással, illetve saját levének elfőzésével. A borsófőzelék finom. Főleg fasírttal!", link: "https://www.youtube.com/watch?v=tf7Ja_LAIFM"},
        { nev: "Somlói galuska", img: "kepek/somloi.jpg", leiras: "Mi ez: Egy három különböző piskótából álló desszert (sima, diós, csokis), mazsolával és dióval, megbolondítva egy kis étcsokoládé öntettel, a tetején tejszínhabbal. Nagyon csokis, nagyon sütis.", link: "https://www.youtube.com/watch?v=3ZmwO_FKkc8"},
        { nev: "Töltött káposzta", img: "kepek/kaposzta.jpg", leiras: "Nagy káposztalevelek hússal és rizzsel töltve, megfőzve, tejföllel leöntve. Ez egy hagyományos, ízletes magyar étel. Ráadásul a káposztát gyakran savanyítják, ami még emlékezetesebb ízt kölcsönöz az ételnek.", link: "https://www.youtube.com/watch?v=XkHadw-FaN8"},
        { nev: "Túrós csusza", img: "kepek/csusza.jpg", leiras: "Lapos, széles tészta magyar túróval összekeverve, amelyre gyakran sült szalonnát szórnak. Szereted a tésztákat? Szereted a túrót? Nos, ez kell neked. Ha húsevő vagy, a szalonna a finom ráadás.", link: "https://www.youtube.com/watch?v=hJsKJOZ1QaY"},
        { nev: "Lecsó", img: "kepek/lecso.jpg", leiras: "A paprikás lecsó hagymából, paradicsomból, paprikából áll, de van aki tesz még bele kolbászt és tojást is. Tápláló és egészséges étel a többi magyar étellel összehasonlítva; a lecsót amilyen könnyű elkészíteni, olyan gazdag ízekben.", link: "https://www.youtube.com/watch?v=M3dLlKdIdYg"},
        { nev: "Pörkölt nokedlivel", img: "kepek/porkolt.jpg", leiras: "A pörkölt húsból (gyakran marhából vagy zúzából készítik), paradicsomból, paprikából és hagymából készül, a magyar „nudlival”, azaz a nokedlivel tálalják. A pörköltet gyakran a szabadban, bográcsban főzik. A szabadban főtt pörkölt egy finom kenyérrel, némi borral a remek társaság alapja.", link: "https://www.youtube.com/watch?v=AfaiUylBAC0"},
        { nev: "Paprikás csirke", img: "kepek/paprikascs.jpg", leiras: "Talán Magyarország egyik legismertebb (köszönhetően a When Harry Met Sally című filmnek), a paprikás csirke egy krémes, fűszeres étel, amit meglepő módon gyakran tejföllel esznek. Egy forró, pikáns, húsos finomság, amit általában nokedlivel (gombóccal) tálalnak", link: "https://www.youtube.com/watch?v=69FHrBg19Ww"},
    ]

    const random = Math.floor(Math.random() * etelek.length);

    document.getElementById("etelNEV").innerHTML = etelek[random].nev;
    document.getElementById("etelIMG").alt = etelek[random].nev;
    document.getElementById("etelIMG").title = etelek[random].nev;
    document.getElementById("etelIMG").src = etelek[random].img;
    document.getElementById("etelLEIRAS").innerHTML = etelek[random].leiras;
    document.getElementById("etelLINK").href = etelek[random].link;
    document.getElementById("etel").style.visibility = "visible";
}