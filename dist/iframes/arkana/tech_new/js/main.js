"use strict";

RenaultShowroom.push('token', '46d0eb24b3adeefd22ae3eee387de88c8ae92d883d3e26b4acdbb252c6f3ae28.vitrine'); // RenaultShowroom.push('token', '6a47b6ba14245049e5b1100271035ed716c11054e2db7adfd41aa6c9d030f332.vitrine');

var bodyH;

if (window.addEventListener) {
  addEventListener('message', listener, false);
} else {
  attachEvent('onmessage', listener);
}

function listener(event) {
  if (event && event.data === 'need_height' || !event) {
    var message = {
      type: 'resize',
      height: document.body.offsetHeight
    };
    window.parent.postMessage(JSON.stringify(message), '*');
  } else if (event && event.data) {
    var data = JSON.parse(event.data);

    if (data.type === 'need_anchortop') {
      var id = data.id;
      var anchorTo = document.querySelector(id);
      if (!anchorTo) return;
      var top = getCoords(anchorTo).top;
      var message = {
        type: 'anchor',
        top: top,
        behavior: 'smooth'
      };
      window.parent.postMessage(JSON.stringify(message), '*');
    }
  }
}
/*
 Для работы якорей отправляем
 var message = {
 type: 'anchor',
 top: top,
 behavior: behavior
 };
 window.parent.postMessage(JSON.stringify(message), '*');


 Для работы якоря в ссылке
 event && event.data === 'need_anchortop'
 var data = JSON.parse(event.data);
 var id = data.id;
 let anchorTo = document.querySelector(id);
 получаем его позицию от верха и отправляем что выше
 */


function sendAnchorRequest(top, behavior) {
  var message = {
    type: 'anchor',
    top: top,
    behavior: behavior
  };
  window.parent.postMessage(JSON.stringify(message), '*');
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

Vue.use(VueMask.VueMaskPlugin);
var app = new Vue({
  el: ".wrapper",
  data: {
    isMobile: document.documentElement.offsetWidth < 768,
    maskType: 2,

    /* SLIDER*/
    isInterior: false,
    // Показываем слайдер интерьер
    bubles: [{
      img: 'fara_zad.png',
      text: 'Светодиодные задние<br>фонари Edge Light'
    }, {
      img: 'baza.png',
      text: 'Самая длинная в сегменте<br>колесная база'
    }, {
      img: 'siluet.png',
      text: 'Выразительный силуэт купе-кроссовера'
    }, {
      img: 'engine.png',
      text: 'Новое сердце Renault ARKANA – TCe 150'
    }, {
      img: 'fara.png',
      text: 'Полностью<br>светодиодная оптика Pure Vision'
    }, {
      img: 'arki.png',
      text: 'Легкосплавные 17” диски'
    }, {
      img: 'privod.png',
      text: 'Интеллектуальная<br>система полного привода'
    }, {
      img: 'klirense.png',
      text: 'Внушительный<br>дорожный просвет'
    }, {
      img: '360.png',
      text: 'Защита кузова 360°'
    }],
    popup: null,

    /*   ADVANTAGES   */
    activeAdvantTab: 0,
    activeAdvantTabMobile: 0,
    advantages: [{
      title: 'На пике технологий',
      text: 'Серия Edition One собрала в&nbsp;себе самые последние технологии компании Renault, которые обеспечат безопасность и&nbsp;комфорт во&nbsp;время движения:<br> &mdash;&nbsp;LED-оптика Pure Vision,<br> &mdash;&nbsp;мультимедийная система EASY LINK, <br> &mdash;&nbsp;система настроек MULTI-SENSE,<br> &mdash;&nbsp;атмосферная подсветка Ambient Light,<br> &mdash;&nbsp;камера кругового обзора,<br> &mdash;&nbsp;система контроля слепых зон,<br> &mdash;&nbsp;аудиосистема премиум-класса BOSE.',
      slides: [{
        title: '',
        img: 'pik-1.jpg',
        text: ''
      }, {
        title: 'LED оптика',
        img: 'pik-2.jpg',
        text: 'Светодиодная оптика Pure Vision обеспечивает на&nbsp;20% мощнее световой поток, улучшая видимость в&nbsp;темное время суток, а&nbsp;благодаря стильным задним LED фонарям с&nbsp;технологией Edge Light, ваш автомобиль будет выделяться из&nbsp;общего потока автомобилей не&nbsp;просто создает уникальный облик Renault ARKANA Edition One. Яркий световой пучок головной оптики на&nbsp;20% мощнее галогеновых лучей.100% LED оптика&nbsp;&mdash; это отличный обзор и&nbsp;заметность на&nbsp;дороге в&nbsp;любое время суток независимо от&nbsp;погодных условий.'
      }, {
        title: 'Удовольствие в каждом метре пути',
        img: 'pik-4.jpg',
        text: 'Послушать альбом любимой группы в&nbsp;дороге или найти новый интересный маршрут? В&nbsp;Renault AKRANA Edition One каждое мгновение, проведенное за&nbsp;рулем, может быть наполнено приятными событиями. Его мультимедийная система Easy Link c&nbsp;8-дюймовым сенсорным экраном и&nbsp;возможностью подключения к&nbsp;Apple CarPlay, Android Auto и&nbsp;Яндекс.Авто позволяет использовать приложения из&nbsp;вашего смартфона. А&nbsp;аудиосистема премиум-класса BOSE сделает звучание привычных треков еще более запоминающимся.'
      }, {
        title: 'Настроен для вас',
        img: 'pik-5.jpg',
        text: 'Система персонализации настроек MULTI-SENSE позволит выбрать нужный режим вождения, контролируя характер двигателя, алгоритм работы трансмиссии CVT X-Tronic и&nbsp;уровень усилия на&nbsp;рулевом колесе. А&nbsp;также создать нужную атмосферу в&nbsp;салоне при помощи подсветки салона Ambient Light.'
      }]
    }, {
      title: 'Инновации в самом сердце',
      text: 'Renault ARKANA Edition One доступен с&nbsp;новым турбодвигателем TCe 150, который сочетается с&nbsp;автоматической трансмиссией CVT X-Tronic нового поколения и&nbsp;интеллектуальной системой полного привода.',
      slides: [{
        title: '',
        img: 'innovations-1.jpg',
        text: ''
      }, {
        title: '',
        img: 'innovations-2.jpg',
        text: ''
      }]
    }, {
      title: 'Эксклюзивность в деталях',
      text: 'Лимитированную серию отличают хромированные накладки на&nbsp;пороги с&nbsp;надписью ARKANA, текстильные коврики с&nbsp;вышивкой Edition One и&nbsp;эксклюзивный ключ-карта красного цвета.',
      slides: [{
        title: '',
        img: 'design-1.jpg',
        text: ''
      }, {
        title: 'Привлекает снаружи',
        img: 'design-2.jpg',
        text: 'Дизайн экстерьера лимитированной серии отличается хромированными элементами, что подчеркнет статус вашего автомобиля, а&nbsp;17-дюймовые легкосплавные диски дополнят динамичный образ купе-кроссовера.'
      }, {
        title: 'Впечатляет внутри',
        img: 'design-3.jpg',
        text: 'Интерьер выполнен в&nbsp;современном стиле с&nbsp;ориентированной на&nbsp;водителя центральной консолью. Сиденья лимитированной серия Edition One обиты кожей, что придает премиальный вид салону автомобиля.'
      }, {
        title: 'Эксклюзивность в деталях',
        img: 'design-4.jpg',
        text: 'Лимитированную серию отличают хромированные накладки на&nbsp;пороги, текстильные коврики с&nbsp;вышивкой Edition One и&nbsp;эксклюзивная ключ-карта красного цвета.'
      }, {
        title: 'Эксклюзивность в деталях',
        img: 'design-5.jpg',
        text: 'Лимитированную серию отличают хромированные накладки на&nbsp;пороги, текстильные коврики с&nbsp;вышивкой Edition One и&nbsp;эксклюзивная ключ-карта красного цвета.'
      }]
    }, {
      title: 'Уникальные условия покупки',
      text: 'Renault ARKANA Edition One доступен для предзаказа онлайн уже сейчас. Вы&nbsp;можете быть уверены в&nbsp;надежности и&nbsp;безопасности оформления: воспользоваться многими услугами, в&nbsp;том числе кредитными программами, без визита в&nbsp;дилерский центр*.',
      slides: [{
        title: '',
        img: 'conditions.jpg',
        text: ''
      }]
    }],

    /*   MOTOR   */
    motor: null,
    canvasWidth: null,
    canvasHeight: null,
    ctx: null,
    imgsCount: 135,
    currentImg: 0,
    currentPosition: 0,
    positions: [0, 63, 107, 23],
    sprites: [],
    isClicked: false,
    // нажата ли мышь перед перемещением
    lastOffsetXPos: null,
    // позиция зажатой мыши до последнего перемещения
    moveDirection: null,
    // направление перетаскивания мыши
    motorItems: [{
      a: 'Турбодвигатель TCe-150',
      stats: [{
        img: 'hourse',
        text: 'мощность 150&nbsp;л.с.'
      }, {
        img: 'moment',
        text: 'крутящий момент<br>250&nbsp;нм'
      }, {
        img: 'maslo',
        text: 'сниженная масса двигателя'
      }],
      hovers: [{
        id: 0,
        //hover-id спанов которых надо выделить
        position: {
          x: 34,
          y: 4
        },
        gif: 'comp_2-turbonagnetatel.gif'
      }, {
        id: 1,
        //hover-id спанов которых надо выделить
        position: {
          x: 33,
          y: 45
        },
        gif: 'comp_1-golovka-bloka.gif'
      }],
      text: ['Специально для российского рынка Renault ARKANA получил бензиновый двигатель TCe-150&nbsp;с турбонаддувом, мощностью 150 л.с.&nbsp;и&nbsp;автоматической трансмиссией CVT X-Tronic с&nbsp;интеллектуальной системой полного привода.',
        'Силовой агрегат оснащен <span data-hover-id="0">турбонагнетателем с электронно-управляемым перепускным клапаном</span>, который делает отклик на нажатие педали акселератора быстрым и точным. Кроме того, в конструкции использована <span data-hover-id="1">облегченная головка блока цилиндров</span>, уменьшающая общий вес.',
        'В&nbsp;автоматической трансмиссии CVT X-Tronic увеличен диапазон передаточных чисел и&nbsp;улучшена плавность работы.']
    }, {
      a: 'Потрясающая эффективность',
      stats: [{
        img: 'fuel',
        text: 'УМЕНЬШЕННЫЙ РАСХОД ТОПЛИВА'
      }, {
        img: 'service',
        text: 'ВЫГОДНОЕ ОБСЛУЖИВАНИЕ'
      }, {
        img: 'pleasure',
        text: 'УДОВОЛЬСТВИЕ ОТ ВОЖДЕНИЯ'
      }],
      hovers: [{
        id: 0,
        //hover-id спанов которых надо выделить
        position: {
          x: 50,
          y: 26
        },
        gif: 'comp_3-6-tochechniy-vprisk.gif'
      }, {
        id: 1,
        //hover-id спанов которых надо выделить
        position: {
          x: 36,
          y: 40
        },
        gif: 'comp_4-cylindry.gif'
      }],
      text: ['Бензиновый двигатель TCe-150&nbsp;&mdash; своего рода произведение инженерного искусства. Среди технических особенностей <span data-hover-id="0">непосредственный впрыск топлива</span> с&nbsp;давлением 250 бар и&nbsp;особая форма камер сгорания, которые обеспечивают превосходные показатели эффективности.',
        'Кроме того, в&nbsp;нем используется двойная система <span data-hover-id="1">изменения фаз газораспределения с&nbsp;роликовыми толкателями и&nbsp;электронным управлением.</span> В&nbsp;зависимости от&nbsp;оборотов и&nbsp;нагрузки она регулирует работу клапанов как на&nbsp;впуске, так и&nbsp;на&nbsp;выпуске. Таким образом инженерам удалось добиться большего крутящего момента на&nbsp;низких оборотах.']
    }, {
      a: 'Впечатляющая надежность',
      stats: [{
        img: 'tests',
        text: 'БОЛЕЕ 300&nbsp;000 КМ ИСПЫТАНИЙ'
      }, {
        img: 'stand',
        text: '40 000 ЧАСОВ ТЕСТОВ НА СТЕНДЕ'
      }, {
        img: 'climateTest',
        text: 'КЛИМАТИЧЕСКИЕ ИСПЫТАНИЯ'
      }],
      hovers: [{
        id: 0,
        //hover-id спанов которых надо выделить
        position: {
          x: 44,
          y: 16
        },
        gif: 'comp_6-kollektor.gif'
      }, {
        id: 1,
        //hover-id спанов которых надо выделить
        position: {
          x: 70,
          y: 29
        },
        gif: 'comp_5-mehanism.gif'
      }],
      text: ['Двигатель Renault ARKANA прошел полный цикл испытаний в экстремальных режимах и полностью адаптирован к российским климатическим и дорожным условиям.', 'Его блок изготовлен из алюминиевого сплава, а <span data-hover-id="0">выпускной коллектор частично встроен в головку блока для эффективного охлаждения</span>. <span data-hover-id="1">Зеркальное покрытие цилиндров получено за счет плазменной обработки</span>, что снижает трение и оптимизирует тепловой режим работы двигателя.', 'В процессе разработки мотор испытывался по 40 000 часов в лабораторных условиях, что соответствует 14 годам работы по 8 часов каждый день. Помимо этого, прототипы автомобилей с двигателями TCe 150 прошли испытания в мороз и жару, в условиях повышенной влажности и сухого климата.']
    }, {
      a: 'Бесступенчатая трансмиссия',
      stats: [{
        img: 'korpus',
        text: 'МЕНЬШЕ шума и вибрации'
      }, {
        img: 'remen',
        text: 'МЕНЬШЕ трения на 40%'
      }],
      hovers: [
        /*{
         id: 0, //hover-id спанов которых надо выделить
         position: {x: 10, y: 10}
         },
         {
         id: 1, //hover-id спанов которых надо выделить
         position: {x: 40, y: 40}
         },*/
      ],
      text: ['Идеальное сочетание путешествий по&nbsp;России: турбированный двигатель TCe-150 и&nbsp;автоматическая трансмиссия CVT X-Tronic с&nbsp;увеличенным диапазоном передаточных чисел.',
        'Это обеспечивает динамичный разгон и&nbsp;в&nbsp;то&nbsp;же время, за&nbsp;счет более точного выбора соотношения, способствует снижению расхода топлива. Кроме того, продуманная конструкция позволяет снизить уровень шума и&nbsp;трения.']
    }],

    /*   POWERS   */
    openPower: null,
    powerImg: '',
    powers: [{
      title: 'Сила мысли',
      content: {
        headtext: 'Купе-кроссовер Renault ARKANA&nbsp;&mdash; автомобиль, созданный с&nbsp;чистого листа. В&nbsp;нем все по-новому: от&nbsp;дизайна кузова до&nbsp;эргономики салона. Получилось эмоционально и&nbsp;надежно&nbsp;&mdash; оцените сами!',
        activeTab: 0,
        tabs: [{
          name: 'Выразительный силуэт',
          img: 'think-1.jpg',
          text: 'Будьте в&nbsp;центре внимания! Яркий силуэт купе-кроссовера притягивает к&nbsp;себе взгляды. Renault ARKANA гармонично сочетает чувственность и&nbsp;силу, подчеркнутую мускулистыми линиями кузова.'
        }, {
          name: 'LED-оптика',
          img: 'think-2.jpg',
          text: 'Покоряйте одним взглядом. Полностью светодиодная оптика Pure Vision придает узнаваемый облик автомобилю и&nbsp;обеспечивает на&nbsp;20% более мощный светопоток. Благодаря технологии Edge Light задние фонари получили свою стильную световую &laquo;подпись&raquo; с&nbsp;3D-эффектом.'
        }, {
          name: 'Вы — в центре<br> внимания',
          img: 'think-3.jpg',
          text: 'В&nbsp;интерьере все сконцентрировано вокруг водителя: продуманная эргономика центральной консоли, интуитивно понятное расположение органов управления, новая мультимедийная система EASY LINK&nbsp;&mdash; все под рукой! Создайте атмосферу по&nbsp;настроению с&nbsp;помощью подсветки интерьера Ambient Light: мягкий окружающий свет в&nbsp;спокойных тонах или динамичный оттенок, настраивающий на&nbsp;решительный драйв? Решать только вам.'
        }]
      }
    }, {
      title: 'Сила характера',
      content: {
        headtext: 'Новый турбированный двигатель TCе 150&nbsp;&mdash; это результат совместной разработки ведущих инженеров Renault и&nbsp;концерна Daimler. Высокоэффективный двигатель с&nbsp;непосредственным впрыском топлива обеспечивает отличную производительность и&nbsp;экономичность.',
        activeTab: 0,
        tabs: [{
          name: 'MULTI-SENSE',
          img: 'character-2.jpg',
          text: 'Системы Renault ARKANA, как единый организм, готовы подстроиться под вас. Персонализация настроек вождения MULTI-SENSE позволяет водителю менять стиль управления в&nbsp;зависимости от&nbsp;его предпочтений: контроль отклика двигателя, усилие на&nbsp;рулевом колесе, выбор цвета подсветки и&nbsp;многое другое.'
        }, {
          name: 'Новый уровень<br> безопасности',
          img: 'character-3.jpg',
          text: 'Главный приоритет&nbsp;&mdash; безопасность пассажиров и&nbsp;спокойствие водителя: до&nbsp;шести&nbsp;подушек безопасности, новейшая система динамической стабилизации и&nbsp;система помощи на&nbsp;подъемах Hill Start Assist.<br> Мы&nbsp;уделили особое внимание силовой конструкции кузова, состоящей на&nbsp;35% из&nbsp;высокопрочных марок стали.'
        }]
      }
    }, {
      title: 'Сила воли',
      content: {
        headtext: 'Яркий характер нового купе-кроссовера Renault ARKANA идеально сочетается с&nbsp;практичностью и&nbsp;надежностью&nbsp;&mdash; фирменными чертами бренда Renault.',
        activeTab: 0,
        tabs: [{
          name: 'Полный привод',
          img: 'volya-1.jpg',
          text: 'Что сравнится с&nbsp;чувством триумфа от&nbsp;достигнутой цели? Пожалуй, только ощущение наслаждения от&nbsp;самой поездки. Интеллектуальная система полного привода Renault ARKANA готова бросить вызов сложным участкам дорог и&nbsp;стать надежным помощником в&nbsp;любой ситуации.'
        }, {
          name: 'Теплые опции',
          img: 'volya-2.jpg',
          text: 'С&nbsp;Renault ARKANA вам не&nbsp;страшны морозы: полный набор &laquo;теплых&raquo; опций создадут комфортную атмосферу внутри салона. Обогрев рулевого колеса и&nbsp;подогрев сидений первого и&nbsp;второго рядов сделают поездку приятной с&nbsp;первых минут. А&nbsp;обогрев форсунок, зеркал и&nbsp;лобового стекла поможет сохранить отличную обзорность в&nbsp;холодную погоду.'
        }, {
          name: 'Создан для России',
          img: 'volya-3.jpg',
          text: 'Внедорожный характер Renault ARKANA воплощен в&nbsp;его внешности. Отличная геометрия кузова, высокий дорожный просвет (205&nbsp;мм), стальная защита картера двигателя придают дополнительную уверенность как на&nbsp;дороге, так и&nbsp;за&nbsp;ее&nbsp;пределами.'
        }]
      }
    }, {
      title: 'Сила духа',
      content: {
        img: 'duh-1.jpg',
        headtext: 'Насладитесь чистым, насыщенным звуком и&nbsp;атмосферой живого выступления, которые создают восемь высокотехнологичных динамиков, сабвуфер и&nbsp;цифровой усилитель со&nbsp;звуковым процессором аудиосистемы премиум-класса BOSE. Система была разработана специально для Renault ARKANA, что обеспечило оптимальное расположение источников звука и&nbsp;позволило добиться концертного качества.'
      }
    }, {
      title: 'Сила интуиции',
      content: {
        headtext: 'Renault ARKANA станет вашим проводником! Инновационные системы помощи водителю будут полезны как при маневрировании в&nbsp;плотном городском потоке, так и&nbsp;при парковке.',
        activeTab: 0,
        tabs: [{
          name: 'EASY LINK',
          img: 'intuition-1.jpg',
          text: 'Новая мультимедийная система c&nbsp;8-дюймовым сенсорным экраном позволяет использовать любимые приложения навигации, музыки и&nbsp;общения в&nbsp;вашем телефоне, не&nbsp;отвлекаясь от&nbsp;вождения, благодаря Apple CarPlay и Android Auto.'
        }, {
          name: 'Яндекс<br> на борту! ',
          img: 'intuition-2.jpg',
          text: 'Теперь «Яндекс.Авто» на&nbsp;экране мультимедийной системы! Подключив смартфон к&nbsp;Easy Link, вы&nbsp;сможете построить кратчайший маршрут, следить за&nbsp;погодой или искать рестораны, магазины, АЗС с&nbsp;помощью голосового помощника «Алиса» на&nbsp;экране вашей мультимедийной системы.'
        }, {
          name: 'Камеры кругового<br> обзора',
          img: 'intuition-3.jpg',
          text: 'Система камер кругового обзора сделает маневрирование в&nbsp;ограниченном пространстве проще и&nbsp;безопаснее. Переключайтесь на&nbsp;любую камеру для удобной парковки и&nbsp;легко преодолевайте все препятствия на&nbsp;вашем пути.'
        }, {
          name: 'Маневры<br> под контролем',
          img: 'intuition-4.jpg',
          text: 'Благодаря системе контроля слепых зон перестроение в&nbsp;потоке станет безопаснее.<br> Она отслеживает положение автомобилей, движущихся в&nbsp;попутном направлении, и&nbsp;своевременно предупреждает о&nbsp;помехе.'
        }]
      }
    }],

    /*   PLATFORM   */
    openPlatform: null,
    platformImg: '',
    platforms: [{
      title: 'Высокопрочная сталь',
      subtitle: 'Более жесткий кузов не только обеспечивает высокий уровень безопасности, но и вносит значительный вклад в улучшение комфорта и управляемости, а также снижение уровня шумов и ',
      text: '',
      img: ''
    }, {
      title: 'Безопасность в пути',
      subtitle: 'Более жесткий кузов не только обеспечивает высокий уровень безопасности, но и вносит значительный вклад в улучшение комфорта и управляемости, а также снижение уровня шумов и ',
      text: '',
      img: ''
    }, {
      title: 'Комфорт за рулем',
      subtitle: 'Более жесткий кузов не только обеспечивает высокий уровень безопасности, но и вносит значительный вклад в улучшение комфорта и управляемости, а также снижение уровня шумов и ',
      text: '',
      img: ''
    }, {
      title: 'Высокая управляемость',
      subtitle: 'Более жесткий кузов не только обеспечивает высокий уровень безопасности, но и вносит значительный вклад в улучшение комфорта и управляемости, а также снижение уровня шумов и ',
      text: '',
      img: ''
    }],

    /*  select car  */
    sumCars: null,
    someApiError: false,
    regions: [],
    currentRegion: {
      label: 'Выберите регион',
      value: ''
    },
    colors: [{
      id: 'NPI',
      "class": 'red',
      img: 'car-red.png'
    }, {
      id: 'NV676',
      "class": 'black',
      img: 'car-black.png'
    }, {
      id: 'OV369',
      "class": 'white',
      img: 'car-white.png'
    }, {
      id: 'TEKAD',
      "class": 'grey',
      img: 'car-grey.png'
    }, {
      id: 'TED69',
      "class": 'greyLight',
      img: 'car-greyLight.png'
    }, {
      id: 'TED17',
      "class": 'brown',
      img: 'car-brownLight.png'
    }, {
      id: 'CNW',
      "class": 'brownLight',
      img: 'car-brown.png'
    }],
    modes: [],
    selectData: {
      mode: null,
      color: 'NPI',
      dealer: null
    },

    /* dealers*/
    isMap: false,
    dealers: [],
    dealersToShow: 5,
    // кол-во дилеров, показываемых на мобиле

    /* ФОРМА сохранить выбор*/
    chooseErrors: [],
    saveChooseComplete: false,
    saveChooseData: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      city: '',
      politics: true
    },
    sendNotificationComplete: false,
    sendNotificationData: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      city: '',
      politics: true
    },

    /*   ФОРМА УЗНАТЬ О СТАРТЕ ПРОДАЖ   */
    knowStartComplete: false,
    knowStartData: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      region: {
        label: 'Выберите регион*',
        value: ''
      },
      dealer: {
        label: 'Выберите дилера*',
        value: ''
      },
      politics: true
    },
    knowStartErrors: [],
    dealersToSelect: []
  },
  components: {
    'v-select': VueSelect.VueSelect
  },
  computed: {
    filterDealers: function filterDealers() {
      var _this = this;

      if (this.knowStartData.region.value == '') return this.dealersToSelect;
      var dealers = this.dealersToSelect.filter(function (el) {
        return el.properties.district_id == _this.knowStartData.region.value;
      });
      return dealers;
    },
    continueLink: function continueLink() {
      if (!this.selectData.mode || !this.currentRegion) return;
      var dealerId = this.selectData.dealer ? this.selectData.dealer.id : '';
      var host = 'https://www.renault.ru/vehicles/range/arkana/showroom.html';
      return host + '#/arkana/' + this.currentRegion.value + '/' + dealerId + '/' + this.selectData.mode.id + '/' + this.selectData.color + '/';
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this2 = this;

    this.initMotorEvents(); //this.getRegions();
    //this.getDealers();

    RenaultFrame.resize(); //this.updateFrame();

    window.onresize = function () {
      RenaultFrame.resize();
      _this2.isMobile = document.documentElement.offsetWidth < 768;
    };
  },
  watch: {
    'knowStartData.dealer': function knowStartDataDealer() {
      var _this3 = this;

      this.knowStartData.region = this.regions.find(function (el) {
        return el.value === _this3.knowStartData.dealer.properties.district_id;
      });
    },
    'selectData.dealer': function selectDataDealer() {
      if (this.selectData.dealer) {
        selectDealer(this.selectData.dealer.id);
      }
    },
    'selectData.mode': function selectDataMode() {
      var _this4 = this;

      if (this.selectData.mode) {
        if (this.selectData.mode.colors.findIndex(function (c) {
          return c.id === _this4.selectData.color;
        }) === -1) {
          this.selectData.color = this.selectData.mode.colors[0].id;
        }
      }
    },
    isInterior: function isInterior() {
      var _this5 = this;

      if (this.isInterior) {
        setTimeout(function () {
          document.querySelector('body').onclick = function (e) {
            if (!e.target.closest('.interior')) {
              _this5.isInterior = false;
              document.querySelector('body').onclick = '';
            }
          };
        }, 300);
      }
    },
    openPower: function openPower() {
      var _this6 = this;

      if (this.openPower !== null) {
        setTimeout(function () {
          document.querySelector('body').onclick = function (e) {
            if (!e.target.closest('.powersBlock')) {
              _this6.openPower = null;
              document.querySelector('body').onclick = '';
            }
          };
        }, 300);
      }
    }
  },
  methods: {
    sendKnowStart: function sendKnowStart() {
      var _this7 = this;

      this.knowStartErrors = [];

      if (this.knowStartData.region.value == '' || this.knowStartData.dealer.value == '') {
        this.knowStartErrors.push('Заполнены не все обязательные поля');
        return;
      }

      var data = new FormData();
      data.append('action', 'arkana_dealer_sos');
      data.append('key', 'ArkanaDealerSOS');
      data.append('name', this.knowStartData.first_name);
      data.append('last_name', this.knowStartData.last_name);
      data.append('email', this.knowStartData.email);
      data.append('phone', this.knowStartData.phone);
      data.append('region_id', this.knowStartData.region.value);
      data.append('dealer_id', this.knowStartData.dealer.value);
      fetch('https://list-arkana.ru/backend/api/user/dealersos/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          _this7.knowStartComplete = true;
          dataLayer.push({
            'event': 'arkana-knowStartForm-send'
          });
        } else {
          _this7.knowStartErrors = data.errors_list;
          console.log(data);
        }
      });
    },
    sendDataLayer: function sendDataLayer() {
      if (this.selectData.mode === null || this.selectData.dealer === null) return;
      dataLayer.push({
        'event': 'arkana-preorder-continue'
      });
    },
    checkClosePopup: function checkClosePopup(e) {
      if (!e.target.closest('.interior')) {
        this.isInterior = false;
      }
    },
    validate: function validate(e, rule) {
      var val = e.target.value;

      switch (rule) {
        case 'ru':
          e.target.value = val.replace(/[^А-Яа-яЁё]/g.exec(val), '');
          break;

        case 'email':
          e.target.value = val.replace(/[А-Яа-яЁё]/g.exec(val), '');
          break;
      }
    },
    anchorTo: function anchorTo(to) {
      var anchorTo = document.querySelector('#' + to);
      var top = getCoords(anchorTo).top;
      var behavior = 'smooth';
      sendAnchorRequest(top, behavior);
    },
    loadMoreDealers: function loadMoreDealers() {
      // на мобиле подгружаем еще дилеров
      this.dealersToShow += 5;
      this.updateFrame();
    },
    updateFrame: function updateFrame() {
      setTimeout(function () {
        var message = {
          type: 'resize',
          height: document.body.offsetHeight
        };
        window.parent.postMessage(JSON.stringify(message), '*');
      }, 1000);
    },
    locateMe: function locateMe() {
      var latlon = this.currentRegion.latlon.split(', ');
      setMapCenter(Number(latlon[0]), Number(latlon[1]));
    },
    // Клик по кнопке Сохранить выбор
    saveChooseBtnClick: function saveChooseBtnClick() {
      this.dealersToShow = 5;
      this.updateFrame();
      this.popup = 'saveChoose';
      this.saveChooseComplete = false;
      if (this.isMobile) this.anchorTo('saveChoose');
    },
    saveChoose: function saveChoose() {
      var _this8 = this;

      var data = new FormData();
      var dealerId = this.selectData.dealer ? this.selectData.dealer.id : '';
      data.append('action', 'save_configuration');
      data.append('key', 'ArkanaEoSave');
      data.append('name', this.saveChooseData.first_name);
      data.append('last_name', this.saveChooseData.last_name);
      data.append('city', this.saveChooseData.city);
      data.append('email', this.saveChooseData.email);
      data.append('phone', this.saveChooseData.phone);
      data.append('model_id', 'ark'); // !!!!

      data.append('modif_id', this.selectData.mode.id);
      data.append('dealer_id', dealerId);
      data.append('district_id', this.currentRegion.value);
      data.append('color_id', this.selectData.color); // !!!!

      fetch('/backend/api/configuration/save/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          _this8.saveChooseComplete = true;

          for (var field in _this8.saveChooseData) {
            _this8.saveChooseData[field] = '';
          }
        } else {
          _this8.chooseErrors = data.errors_list;
          console.log(data);
        }
      });
    },
    sendNotification: function sendNotification() {
      var _this9 = this;

      var data = new FormData();
      data.append('action', 'user_want_car');
      data.append('key', 'ArkanaEoNew');
      data.append('name', this.sendNotificationData.first_name);
      data.append('last_name', this.sendNotificationData.last_name);
      data.append('city', this.sendNotificationData.city);
      data.append('email', this.sendNotificationData.email);
      data.append('phone', this.sendNotificationData.phone);
      fetch('/backend/api/user/wantcars/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          console.log(data);
          _this9.sendNotificationComplete = true;
        } else {
          console.log(data);
        }
      });
    },
    getDealers: function getDealers() {
      var _this10 = this;

      fetch('/v3/backend/data/dealers.geojson').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        _this10.dealers = data.features;
        _this10.dealersToSelect = data.features.map(function (el) {
          return {
            label: el.properties.dealerName + ' ' + el.properties.address,
            value: el.id,
            properties: el.properties
          };
        });
      });
    },
    getRegions: function getRegions() {
      var _this11 = this;

      fetch('/v3/backend/data/regions.json').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        var regions = data.map(function (el) {
          return {
            label: el.regionName,
            value: el.renaultRegionISO,
            locale: el.sxGeoRegionISO,
            latlon: el.latlon
          };
        });
        _this11.regions = regions.sort(function (reg1, reg2) {
          if (reg1.label > reg2.label) {
            return 1;
          } else if (reg1.label < reg2.label) {
            return -1;
          }

          return 0;
        });
      }).then(function () {//this.getUserRegion();
      });
    },
    getUserRegion: function getUserRegion() {
      var _this12 = this;

      fetch('/backend/api/geolocation/locate/').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        _this12.currentRegion = _this12.regions.find(function (reg) {
          return reg.locale === data.region_iso;
        }) || _this12.regions.find(function (reg) {
          return reg.locale === 'RU-MOW';
        });

        _this12.getModeByRegion();

        window.timerSetMap = setInterval(function () {
          if (map) {
            _this12.locateMe();

            clearInterval(window.timerSetMap);
          }
        }, 100);
      });
    },
    getModeByRegion: function getModeByRegion() {
      var _this13 = this;

      this.modes = [];
      this.someApiError = false; // Request

      this.dealersToShow = 5;
      this.updateFrame(); // this.modes = [];

      this.selectData.mode = null;
      RenaultShowroom.push('modifications', {
        vitrine: 'arkana',
        district: this.currentRegion.value
      }, function (err, data) {
        console.log(data);

        if (err) {
          console.log('Произошла ошибка: ');
          console.log(err);

          if (err.no_response === true) {
            _this13.someApiError = true;
          }

          return;
        }

        if (data.length === 0) {
          console.log('Был достигнут лимит заказов на Аркане.');

          _this13.modes.push('limit');

          return;
        }

        _this13.modes = data.modifications;
        _this13.selectData.mode = _this13.modes[0];

        _this13.modes.forEach(function (el) {
          _this13.getCountCars(el);
        });

        console.log(_this13.modes);
      });
    },
    getCountCars: function getCountCars(mode) {
      var _this14 = this;

      RenaultShowroom.push('summary', {
        vitrine: 'arkana',
        district: this.currentRegion.value,
        preset: {
          modifications: [mode.id],
          colors: {
            body: [mode.colors.map(function (el) {
              return el.id;
            })]
          }
        }
      }, function (err, data) {
        if (err) {
          console.warn(err);
        } else {
          _this14.$set(mode, 'count', data.counters.cars);

          _this14.$set(mode, 'minPrice', data.counters.min_price);
        }
      });
    },
    getSumCountCars: function getSumCountCars() {
      var _this15 = this;

      RenaultShowroom.push('summary', {
        vitrine: 'arkana'
      }, function (err, data) {
        if (err) {
          console.warn(err);
          setTimeout(function () {
            // this.sumCars = 0;
            _this15.someApiError = true;

            _this15.updateFrame();
          }, 1000);
        } else {
          console.log(data);
          _this15.sumCars = data.counters.cars;

          _this15.updateFrame(); // !!


          _this15.getRegions();
        }
      });
    },
    imgLoad: function imgLoad() {
      var imgs = ['powers/powers-character-eco.jpg', 'powers/powers-duh.jpg', 'powers/powers-intuition-krugObzor.jpg', 'powers/powers-intuition-multSystem.jpg', 'powers/powers-intuition-slepZon.jpg', 'powers/powers-think-light.jpg', 'powers/powers-think-theFirst.jpg', 'powers/powers-voly-dopZash.jpg', 'powers/powers-voly-geometry.jpg', 'powers/powers-voly-newBaza.jpg', 'selectCars/car-red.png', 'selectCars/car-black.png', 'selectCars/car-brown.png', 'selectCars/car-brownLight.png', 'selectCars/car-grey.png', 'selectCars/car-greyLight.png', 'selectCars/car-white.png'];
      imgs.forEach(function (el) {
        new Image().src = 'img/' + el;
      });
    },
    lightenText: function lightenText(id) {
      // подсвет текста при наведении на плюсики
      var text = document.querySelector('.equipment .item.open .content .text');
      var elems = text.querySelectorAll('p span[data-hover-id="' + id + '"]');
      text.classList.add('showLighten');
      Array.prototype.forEach.call(elems, function (el) {
        el.classList.add('lighten');
      });
    },
    hideLightenText: function hideLightenText(id) {
      // убираем подсвет текста при наведении на плюсики
      var text = document.querySelector('.equipment .item.open .content .text');
      var elems = text.querySelectorAll('p span[data-hover-id="' + id + '"]');
      text.classList.remove('showLighten');
      Array.prototype.forEach.call(elems, function (el) {
        el.classList.remove('lighten');
      });
    },
    initMotorEvents: function initMotorEvents() {
      var _this16 = this;

      this.motor = document.getElementById('motor');
      this.ctx = this.motor.getContext('2d');
      this.canvasWidth = this.motor.width;
      this.canvasHeight = this.motor.height;
      this.currentImg = this.positions[this.currentPosition];
      var onloadCount = 0;

      for (var i = 0; i < this.imgsCount; i++) {
        var img = new Image();
        img.src = 'img/motor/' + (i + 1) + '.png';
        this.sprites.push(img);

        img.onload = function () {
          onloadCount++;

          if (onloadCount >= _this16.imgsCount) {
            _this16.render();
          }
        };
      }

      this.motor.addEventListener('mousedown', function (e) {
        _this16.touchStart(e);
      });
      this.motor.addEventListener('touchstart', function (e) {
        _this16.touchStart(e);
      });
      this.motor.addEventListener('mousemove', function (e) {
        _this16.touchMove(e);
      });
      this.motor.addEventListener('touchmove', function (e) {
        _this16.touchMove(e);
      });
      this.motor.addEventListener('mouseup', function () {
        _this16.touchEnd();
      });
      this.motor.addEventListener('touchend', function () {
        _this16.touchEnd();
      });
      this.motor.addEventListener('mouseleave', function () {
        if (_this16.isClicked) {
          _this16.isClicked = false;

          _this16.updatePosition(_this16.moveDirection);
        }
      });
    },
    render: function render() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.drawImage(this.sprites[this.currentImg], 0, 0, this.canvasWidth, this.canvasHeight);
    },
    updatePosition: function updatePosition(dir, position) {
      var _this17 = this;

      clearInterval(window.posTimer);

      if (position !== undefined) {
        if (this.currentPosition === position) return;

        if (this.currentPosition === this.positions.length - 1 && position === 0) {
          dir = "prev";
        } else if (this.currentPosition === 0 && position === this.positions.length - 1) {
          dir = "next";
        } else if (this.currentPosition > position) {
          dir = "prev";
        } else {
          dir = "next";
        }

        this.currentPosition = position;
      } else {
        this.currentPosition += dir == 'next' ? 1 : -1;
      }

      if (this.currentPosition > this.positions.length - 1) this.currentPosition = 0;
      if (this.currentPosition < 0) this.currentPosition = this.positions.length - 1;
      var neededPosition = this.positions[this.currentPosition];
      window.posTimer = setInterval(function () {
        _this17.currentImg += dir == 'next' ? 1 : -1;
        if (_this17.currentImg >= _this17.imgsCount) _this17.currentImg = 0;
        if (_this17.currentImg < 0) _this17.currentImg = _this17.imgsCount - 1;

        _this17.render();

        if (_this17.currentImg === neededPosition) {
          clearInterval(window.posTimer);
        }
      }, 15);
    },
    touchStart: function touchStart(e) {
      console.log('touchStart');

      if (typeof e.touches !== 'undefined') {
        this.lastOffsetXPos = e.touches[0].clientX;
      } else {
        this.lastOffsetXPos = e.offsetX;
      }

      this.isClicked = true;
    },
    touchEnd: function touchEnd() {
      console.log('touchEnd');
      this.isClicked = false;
      this.updatePosition(this.moveDirection);
    },
    touchMove: function touchMove(e) {
      if (!this.isClicked) return;
      var offsetX = typeof e.touches !== 'undefined' ? e.touches[0].clientX : e.offsetX;

      if (offsetX > this.lastOffsetXPos) {
        this.currentImg++;
        if (this.currentImg >= this.imgsCount) this.currentImg = 0;
        this.moveDirection = 'next';
      } else if (offsetX < this.lastOffsetXPos) {
        this.currentImg--;
        if (this.currentImg < 0) this.currentImg = this.imgsCount - 1;
        this.moveDirection = 'prev';
      }

      this.render();
      this.lastOffsetXPos = offsetX;
    },
    slideTo: function slideTo(i) {
      car_slider.slideTo(i);
    },
    slideAdvantTo: function slideAdvantTo(i) {
      if (i === 0) {
        advantagesSwiper.slideToLoop(0);
      } else if (i === 1) {
        advantagesSwiper.slideToLoop(4);
      } else if (i === 2) {
        advantagesSwiper.slideToLoop(6);
      } else if (i === 3) {
        advantagesSwiper.slideToLoop(11);
      }
    }
  },
  filters: {
    prettyPrice: function prettyPrice(price) {
      if (!price) return '—';
      price = String(price);
      return price.slice(0, -6) + ' ' + price.slice(-6, -3) + ' ' + price.slice(-3);
    }
  }
});
/* слайдер фич автомобиля НАЧАЛО */

function isIE() {
  return window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

function clearAllTimeouts(allcBoxTimeouts) {
  allcBoxTimeouts.forEach(function (array) {
    array.forEach(function (item) {
      clearTimeout(item);
    });
  });
}

var cBox = $(".chrtc__box"),
    allcBoxTimeouts = [];
cBox.click(function () {
  var cBoxTimeouts = [],
      elem = $(this),
      elemData = elem.data("image");

  if ($(".chrtc__image").css("opacity", "0"), $(".chrtc__image").removeClass("active"), $('.chrtc__image[data-image="' + elemData + '"]').css("opacity", "1").addClass("active"), 1 === parseInt(elemData) ? setTimeout(function () {
    var interval = 0,
        intervalStep = 100;
    $(".chrtc__spotlight .layer__stars .item").each(function (i, item) {
      setTimeout(function () {
        $(item).addClass("active");
      }, interval), intervalStep /= 2, interval += intervalStep;
    }), $(".chrtc__spotlight .layers").addClass("active");
  }, 1e3) : ($(".chrtc__spotlight .layer__stars .item").removeClass("active"), $(".chrtc__spotlight .layers").removeClass("active")), elem.hasClass("chrtc__box--normal")) {
    clearAllTimeouts(allcBoxTimeouts), $(".chrtc__descr__head").css("opacity", "0"), $(".chrtc__descr__title").css("opacity", "0"), $(".chrtc__descr__othertext").css("opacity", "0"),
    /*$(".chrtc__descr__text").css("opacity", "0"),*/
    cBox.removeClass("chrtc__box--normal"), cBox.addClass("chrtc__box--little"), elem.removeClass("chrtc__box--little"), elem.addClass("chrtc__box--active");
    elem.find(".chrtc__descr__othertext").css("display", "block"), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__head").css("opacity", "1"), isIE() || ($(".chrtc__descr__head").addClass("animated fadeInRight"), $(".chrtc__descr__head").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__head").removeClass("animated fadeInRight");
      }));
    }, 1400)), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__title").css("opacity", "1"), isIE() || ($(".chrtc__descr__title").addClass("animated fadeInRight"), $(".chrtc__descr__title").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__title").removeClass("animated fadeInRight");
      }));
    }, 1600)), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__othertext").css("opacity", "1"), isIE() || ($(".chrtc__descr__othertext").addClass("animated fadeInRight"), $(".chrtc__descr__othertext").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__othertext").removeClass("animated fadeInRight");
      }));
    }, 1800));
  } else if (elem.hasClass("chrtc__box--active")) {
    clearAllTimeouts(allcBoxTimeouts), $(".chrtc__descr__othertext").css({
      display: "none",
      opacity: 0
    }), $(".chrtc__descr__text").css("opacity", "0");

    var _elemOthertext = elem.find(".chrtc__descr__text");

    _elemOthertext.css("display", "block"), cBox.removeClass("chrtc__box--little"), cBox.removeClass("chrtc__box--active"), cBox.addClass("chrtc__box--normal"), $(".chrtc__image").css("opacity", "0"), $(".chrtc__image").removeClass("active"), $(".main-img").css("opacity", "1");
  } else if (elem.hasClass("chrtc__box--little")) {
    clearAllTimeouts(allcBoxTimeouts);

    var aHead = $(".chrtc__box--active").find(".chrtc__descr__head"),
        aTitle = $(".chrtc__box--active").find(".chrtc__descr__title"),
        aOthertext = $(".chrtc__box--active").find(".chrtc__descr__othertext"),
        elemHead = elem.find(".chrtc__descr__head"),
        elemTitle = elem.find(".chrtc__descr__title"),
        _elemOthertext2 = elem.find(".chrtc__descr__othertext");

    aHead.css("opacity", "0"), aTitle.css("opacity", "0"), aOthertext.css("opacity", "0"), aOthertext.hide(), elemHead.css("opacity", "0"), elemTitle.css("opacity", "0"), _elemOthertext2.css("opacity", "0");
    var timeout = setTimeout(function () {
      elemHead.css("opacity", "1"), isIE() || (elemHead.addClass("animated fadeInRight"), elemHead.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        elemHead.removeClass("animated fadeInRight");
      }));
    }, 1400);
    cBoxTimeouts.push(timeout), timeout = cBoxTimeouts.push(setTimeout(function () {
      elemTitle.css("opacity", "1"), isIE() || (elemTitle.addClass("animated fadeInRight"), elemTitle.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        elemTitle.removeClass("animated fadeInRight");
      }));
    }, 300)), cBoxTimeouts.push(timeout), timeout = setTimeout(function () {
      _elemOthertext2.css("display", "block"), _elemOthertext2.css("opacity", "1"), isIE() || (_elemOthertext2.addClass("animated fadeInRight"), _elemOthertext2.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        _elemOthertext2.removeClass("animated fadeInRight");
      }));
    }, 300), cBoxTimeouts.push(timeout), timeout = setTimeout(function () {
      aHead.css("opacity", "1"), isIE() || (aHead.addClass("animated fadeInRight"), aHead.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        aHead.removeClass("animated fadeInRight");
      }));
    }, 1400), cBoxTimeouts.push(timeout), cBox.removeClass("chrtc__box--normal"), cBox.removeClass("chrtc__box--active"), cBox.removeClass("chrtc__box--little"), cBox.addClass("chrtc__box--little"), elem.removeClass("chrtc__box--little"), elem.addClass("chrtc__box--active");
  }

  allcBoxTimeouts.push(cBoxTimeouts);
});
/* слайдер фич автомобиля КОНЕЦ */
