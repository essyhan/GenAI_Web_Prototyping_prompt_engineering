// Steam Girl Website - Interactive Features

class SteamGirlSite {
  constructor() {
    this.currentTheme = 'light';
    this.currentLanguage = 'en';
    this.particles = [];
    this.canvas = null;
    this.ctx = null;
    this.animationFrame = null;
    
    // Translation data
    this.translations = {
      en: {
        nav: {
          home: "Home",
          profile: "Profile",
          growth: "Growth"
        },
        hero: {
          title: {
            part1: "Where Fire Meets Water,",
            part2: "Magic Begins"
          },
          subtitle: "Meet Steam Girl – born of opposing forces, united by wonder. In a realm where emotions shape reality, she bridges the impossible.",
          btn: {
            discover: "Discover Her Magic",
            journey: "See Her Journey"
          }
        },
        powers: {
          title: "The Dance of Elements",
          subtitle: "Steam Girl harnesses the ancient power where fire and water become one. Her magic flows like morning mist, burns like sunset flames, and brings life to everything she touches.",
          fire: {
            title: "Flame Mastery",
            desc: "Controls the passionate fire within, creating warming flames that never burn those she protects."
          },
          water: {
            title: "Water Harmony",
            desc: "Flows with the rhythm of rivers and rain, healing wounds and nurturing growth wherever she goes."
          },
          steam: {
            title: "Steam Creation",
            desc: "Bridges fire and water to create magical steam that can transport, transform, and transcend."
          }
        },
        world: {
          title: "Welcome to Element City",
          desc1: "Set in Element City, where Fire-, Water-, Earth- and Air-residents live together. The elements that live in Element City symbolize the different races and their social status in New York City in real life. Steam Girl's journey through this diverse metropolis teaches us that our differences don't divide us—they make us stronger.",
          desc2: "From the bustling Water District where currents flow like city streets, to the glowing Fire Town where warmth and passion ignite, every neighborhood of Element City pulses with the heartbeat of pure emotion and elemental magic."
        },
        city: {
          main: {
            title: {
              part1: "Element City:",
              part2: "Where Diversity Flows"
            },
            desc1: "In the heart of this magnificent metropolis, **towering structures pulse with elemental energy**. Steam Girl walks these vibrant streets where **water flows through crystal channels** alongside **fire's warm glow** from every window. Here, a water family might live next door to fire relatives, their children playing together in parks where earth grows gardens and air carries laughter across every neighborhood.",
            quote: "\"This city taught me that **home isn't about being the same**—it's about choosing to **build something beautiful together**, even when we're different.\"",
            quote_cite: "— Steam Girl's reflection",
            highlight: "✨ Where every street tells a story of unity"
          },
          fire: {
            title: {
              part1: "Fire Town:",
              part2: "Hearts That Never Cool"
            },
            desc1: "In Fire Town's **glowing streets**, passion ignites every corner. Steam Girl's **fire heritage burns brightest here**, where molten metal flows like rivers and every building radiates warmth that goes beyond temperature—it's the **warmth of community**, of families gathering around eternal hearths, sharing stories that spark with life.",
            memory: "\"My father Blaze brought me here as a child, and I watched **fire families feeding their flames together**, supporting each other through the coldest nights. They taught me that **true fire isn't destructive**—it's protective, nurturing, and endlessly giving.\"",
            stat1: "**Eternal Flames**",
            stat2: "**Passionate Hearts**"
          },
          water: {
            title: {
              part1: "Water District:",
              part2: "The Flowing Foundation"
            },
            desc1: "The Water District flows with **ancient wisdom and endless adaptability**. Here, Steam Girl's water mother Marina first showed her how **strength doesn't always roar**—sometimes it flows quietly, persistently, **finding ways around every obstacle** until it shapes the very landscape of possibility.",
            desc2: "From the **grand aqueducts** where water citizens commute in rushing currents, to the **serene reflection pools** where families gather to share their day's experiences, this district embodies the truth that water, while yielding, **ultimately carves the deepest canyons**.",
            quote: "\"In the Water District, I learned that **being fluid isn't weakness**—it's the **ultimate strength**.\"",
            quote_cite: "— Steam Girl's wisdom"
          },
          life: {
            title: "Life in",
            title_accent: "Element City",
            fire: {
              title: "**Fire Family Life**",
              desc: "Homes heated by **love and literal flames**, where every meal is cooked with fire-born warmth and every evening ends with families gathered around their hearth, **sharing dreams that sparkle like embers**."
            },
            water: {
              title: "**Water Community Flow**",
              desc: "Neighbors flow between homes through **connecting waterways**, children splash in communal pools while parents **share stories that ripple through generations** like gentle waves."
            },
            steam: {
              title: "**Steam Girl's Bridge**",
              desc: "Moving between districts like **living poetry**, she carries fire's warmth to water's wisdom and water's flow to fire's passion, proving that **differences create the most beautiful harmonies**."
            }
          }
        },
        cta: {
          title: "Ready to Explore Her World?",
          text: "Dive deeper into Steam Girl's story, discover her relationships, and witness the incredible journey from curious child to elemental master.",
          btn: {
            profile: "Character Deep Dive",
            growth: "Growth Timeline"
          }
        },
        footer: {
          copyright: "© 2024 Steam Girl Universe. Created with 🔥 and 💧",
          fanart: "Fan Art",
          community: "Community",
          downloads: "Downloads"
        }
      },
      ko: {
        nav: {
          home: "홈",
          profile: "프로필",
          growth: "성장"
        },
        hero: {
          title: {
            part1: "불과 물이 만나는 곳,",
            part2: "마법이 시작된다"
          },
          subtitle: "스팀 걸을 만나보세요 – 상반된 힘에서 태어나 경이로움으로 하나가 된 존재. 감정이 현실을 만드는 세계에서, 그녀는 불가능을 연결합니다.",
          btn: {
            discover: "그녀의 마법 발견하기",
            journey: "그녀의 여정 보기"
          }
        },
        powers: {
          title: "원소들의 춤",
          subtitle: "스팀 걸은 불과 물이 하나가 되는 고대의 힘을 다룹니다. 그녀의 마법은 아침 안개처럼 흘러가고, 석양 불꽃처럼 타오르며, 그녀가 만지는 모든 것에 생명을 불어넣습니다.",
          fire: {
            title: "불꽃 지배술",
            desc: "내면의 열정적인 불을 조절하여, 그녀가 보호하는 이들을 결코 태우지 않는 따뜻한 불꽃을 만들어냅니다."
          },
          water: {
            title: "물의 조화",
            desc: "강과 비의 리듬에 맞춰 흘러가며, 그녀가 가는 곳마다 상처를 치유하고 성장을 돕습니다."
          },
          steam: {
            title: "증기 창조",
            desc: "불과 물을 연결하여 운송하고, 변화시키고, 초월할 수 있는 마법적인 증기를 만들어냅니다."
          }
        },
        world: {
          title: "엘리멘트 시티에 오신 것을 환영합니다",
          desc1: "불, 물, 흙, 공기 원소들이 함께 살아가는 엘리멘트 시티를 배경으로 합니다. 엘리멘트 시티에 사는 원소들은 현실의 뉴욕시에서 서로 다른 인종과 그들의 사회적 지위를 상징합니다. 이 다양한 대도시를 통한 스팀 걸의 여정은 우리의 차이점이 우리를 갈라놓는 것이 아니라 더 강하게 만든다는 것을 가르쳐줍니다.",
          desc2: "물살이 도시의 거리처럼 흘러가는 번화한 워터 디스트릭트부터, 따뜻함과 열정이 불타오르는 빛나는 파이어 타운까지, 엘리멘트 시티의 모든 동네는 순수한 감정과 원소 마법의 심장박동으로 뛰고 있습니다."
        },
        city: {
          main: {
            title: {
              part1: "엘리멘트 시티:",
              part2: "다양성이 흘러가는 곳"
            },
            desc1: "이 웅장한 대도시의 중심에서, **우뚝 솟은 건물들이 원소 에너지로 맥동합니다**. 스팀 걸은 **수정 수로를 통해 흐르는 물**과 모든 창문에서 나오는 **불의 따뜻한 빛**이 함께하는 이 활기찬 거리를 걸어갑니다. 여기서는 물 가족이 불 친척들 옆에 살면서, 그들의 아이들이 흙이 정원을 가꾸고 바람이 웃음소리를 모든 동네로 실어 나르는 공원에서 함께 놀고 있습니다.",
            quote: "\"이 도시는 나에게 **집이란 같은 것이 아니라는 것**을 가르쳐 주었어요—우리가 다를 때, 특히 다를 때 **함께 아름다운 것을 만들어 가기로 선택하는 것**이에요.\"",
            quote_cite: "— 스팀 걸의 성찰",
            highlight: "✨ 모든 거리가 화합의 이야기를 들려주는 곳"
          },
          fire: {
            title: {
              part1: "파이어 타운:",
              part2: "절대 식지 않는 마음들"
            },
            desc1: "파이어 타운의 **빛나는 거리**에서는 열정이 모든 구석을 밝힙니다. **스팀 걸의 불 혈통이 가장 밝게 타오르는 곳**으로, 용융 금속이 강처럼 흘러가고 모든 건물이 온도를 넘어선 따뜻함—**공동체의 따뜻함**, 영원한 화로 주위에 모인 가족들이 삶에 불꽃을 일으키는 이야기를 나누는 따뜻함을 발산합니다.",
            memory: "\"아버지 블레이즈가 어린 시절 나를 이곳에 데려와서, **불 가족들이 함께 불꽃을 키우며** 가장 추운 밤에도 서로를 지탱하는 모습을 보았어요. 그들은 **진정한 불은 파괴적이지 않다**는 것—보호하고, 양육하며, 끝없이 주는 것이라는 걸 가르쳐 주었어요.\"",
            stat1: "**영원한 불꽃**",
            stat2: "**열정적인 마음들**"
          },
          water: {
            title: {
              part1: "워터 디스트릭트:",
              part2: "흘러가는 기반"
            },
            desc1: "워터 디스트릭트는 **고대의 지혜와 끝없는 적응력**을 가지고 흘러갑니다. 여기서 스팀 걸의 물 어머니 마리나는 **힘이 항상 포효하는 것은 아니라는 것**—때로는 조용히, 끈질기게 흘러가면서 **모든 장애물 주위로 길을 찾아** 가능성의 풍경을 만들어간다는 것을 처음 보여주었습니다.",
            desc2: "물 시민들이 거센 물살 속에서 출근하는 **웅장한 수로**부터, 가족들이 하루의 경험을 나누기 위해 모이는 **고요한 반사 연못**까지, 이 지역은 물이 굴복하는 것처럼 보이지만 **결국 가장 깊은 협곡을 파낸다**는 진실을 구현합니다.",
            quote: "\"워터 디스트릭트에서 나는 **유연함이 약함이 아니라**—그것이 **궁극적인 힘**이라는 것을 배웠어요.\"",
            quote_cite: "— 스팀 걸의 지혜"
          },
          life: {
            title: "삶 in",
            title_accent: "엘리멘트 시티",
            fire: {
              title: "**불 가족의 삶**",
              desc: "**사랑과 진짜 불꽃**으로 난방되는 집에서, 모든 식사는 불에서 태어난 따뜻함으로 요리되고 매일 저녁은 화로 주위에 모인 가족들이 **타오르는 불꽃처럼 빛나는 꿈을 나누며** 마무리됩니다."
            },
            water: {
              title: "**물 공동체의 흐름**",
              desc: "이웃들은 **연결된 수로**를 통해 집들 사이를 흘러다니고, 아이들은 공동 풀에서 물장구치며 부모들은 **세대를 거쳐 파문처럼 퍼져가는 이야기들을** 부드러운 파도처럼 나눕니다."
            },
            steam: {
              title: "**스팀 걸의 다리**",
              desc: "**살아있는 시**처럼 지역들 사이를 이동하며, 그녀는 불의 따뜻함을 물의 지혜에, 물의 흐름을 불의 열정에 전달하여 **차이점들이 가장 아름다운 조화를 만들어낸다**는 것을 증명합니다."
            }
          }
        },
        cta: {
          title: "그녀의 세계를 탐험할 준비가 되셨나요?",
          text: "스팀 걸의 이야기를 더 깊이 파고들고, 그녀의 관계들을 발견하며, 호기심 많은 아이에서 원소 마스터로의 놀라운 여정을 목격해보세요.",
          btn: {
            profile: "캐릭터 심층 탐구",
            growth: "성장 타임라인"
          }
        },
        profile: {
          title: "원소 다리 • 마법 중재자 • 희망 전령",
          stats: {
            age: "나이",
            element: "원소",
            element_value: "불 + 물",
            home: "고향",
            home_value: "엘리멘트 시티",
            power: "파워 레벨",
            power_value: "마스터"
          },
          bio: {
            title: "마법 뒤의 마음",
            intro: "스팀 걸은 원소 세계에서 가장 희귀한 재능을 가지고 있습니다 – 혼돈 속에서 조화를 찾는 능력입니다. 불과 물의 영혼이 잠시 같은 하늘을 공유했던 대수렴 시기에 태어난 그녀는 두 원소의 본질을 모두 간직하고 있습니다.",
            detail: "그녀의 불꽃만큼 따뜻한 마음과 그녀의 물처럼 유연한 정신으로, 스팀 걸은 모든 모순 속에서 아름다움을 봅니다. 그녀의 웃음은 잿더미 위의 아침 이슬처럼 분노를 진정시킬 수 있고, 그녀의 결의는 가장 깊은 슬픔도 증발시킬 만큼 밝게 타오를 수 있습니다.",
            philosophy: "\"모든 원소는 이야기가 있어요,\" 그녀는 내면의 빛으로 반짝이는 녹색 눈을 가지고 자주 말합니다. \"제 일은 편을 선택하는 것이 아니라 – 그들이 모두 같은 아름다운 노래의 일부라는 것을 기억하도록 돕는 것이에요.\""
          },
          traits: {
            title: "핵심 특성",
            passionate: {
              title: "열정적인",
              desc: "정의, 사랑, 그리고 스스로를 보호할 수 없는 이들을 보호하기 위해 밝게 타오릅니다"
            },
            adaptable: {
              title: "적응력 있는",
              desc: "우아하게 장애물을 돌아 흘러가며, 기존 길이 막혔을 때 새로운 길을 찾습니다"
            },
            empathetic: {
              title: "공감하는",
              desc: "원소와 사람들의 감정적 공명을 느끼며, 이해의 다리를 만들어냅니다"
            },
            harmonious: {
              title: "조화로운",
              desc: "모든 것에서 균형을 추구하며, 대립이 가장 아름다운 교향곡을 만든다고 믿습니다"
            }
          },
          powers: {
            title: "시간을 통한 힘",
            subtitle: "경험, 지혜, 그리고 그녀가 형성한 유대에 의해 어떻게 스팀 걸의 능력이 성장하고 진화했는지 지켜보세요.",
            level_label: "파워 레벨:",
            childhood: {
              age: "3-10세",
              title: "어린 시절의 불꽃",
              ability1: "🔥 손가락 주위에서 춤추는 작은 불꽃 조각들",
              ability2: "💧 떠다니며 절대 터지지 않는 물방울들",
              ability3: "☁️ 숨바꼭질용 작은 증기 구름들",
              ability4: "✨ 방 안의 감정적 온도 변화",
              desc: "그녀의 힘은 처음에 장난스러운 마법으로 나타났습니다 – 태우는 대신 간지럽히는 불꽃, 만지면 킥킥거리는 물. 모든 감정이 그녀 주변에 작은 날씨 시스템을 만들어냈습니다."
            },
            teenage: {
              age: "11-17세",
              title: "격동의 10대",
              ability1: "🔥 친구들을 해로부터 보호하는 불 방패",
              ability2: "💧 몸과 영혼을 모두 치유하는 치유의 물",
              ability3: "☁️ 짧은 거리를 가로지르는 증기 이동",
              ability4: "🌪️ 강한 감정 중 날씨에 미치는 영향",
              desc: "청소년기는 감정과 연결된 힘의 급증을 가져왔습니다. 그녀는 숙련이 감정을 통제하는 것이 아니라 이해하는 것이라는 걸 배웠습니다. 증기는 이 변화의 시기 동안 그녀의 상징이 되었습니다."
            },
            adulthood: {
              age: "18세+",
              title: "원소 숙련",
              ability1: "🔥 희망을 불러일으키는 현실 조각 불꽃 조각품",
              ability2: "💧 죽어가는 풍경을 되살릴 수 있는 생명을 주는 물",
              ability3: "☁️ 영역 간 차원간 증기 여행",
              ability4: "🌈 갈등에 평화를 가져다주는 원소 조화 명상",
              desc: "진정한 숙련은 그녀가 통제하는 원소에 있는 것이 아니라 그녀가 만드는 연결에 있다는 것을 이해하면서 찾아왔습니다. 이제 그녀는 모든 대립하는 힘들 사이의 다리 역할을 하고 있습니다."
            }
          },
          relationships: {
            title: "그녀의 영혼을 형성하는 유대",
            subtitle: "스팀 걸의 연결은 바다 해류만큼 깊이 흐르고 별빛처럼 밝게 타오릅니다. 가족, 친구들, 심지어 과거의 라이벌들과의 관계가 그녀를 오늘날의 원소 다리로 만들어냈습니다.",
            bond_strength: "유대 강도:",
            family: {
              name: "엠버 가족",
              role: "양부모",
              desc: "불 원소 블레이즈와 물 정령 마리나는 대수렴 이후 아기 스팀 걸을 발견했습니다. 그들의 사랑은 그녀에게 대립하는 힘들이 가장 아름다운 조화를 만들 수 있다는 것을 가르쳐주었습니다."
            },
            mentor: {
              name: "장로 미스트",
              role: "영적 안내자",
              desc: "스팀 걸에게 물리적 원소를 넘어 진정으로 마법을 형성하는 감정과 의도를 보는 법을 가르친 고대 구름 정령입니다."
            },
            friend: {
              name: "페트리코",
              role: "가장 친한 친구",
              desc: "흙에 비가 내리는 향을 조절하는 대지 원소입니다. 끔찍한 가뭄 중에 스팀 걸의 비가 페트리코의 첫 정원을 키우는 데 도움을 주면서 우정이 꽃피었습니다."
            },
            rival: {
              name: "스톰 킹",
              role: "개과천선한 라이벌",
              desc: "한때 원소들이 절대 섞여서는 안 된다고 믿었습니다. 스팀 걸의 인내심 있는 우정이 그의 경직된 사고를 천천히 녹여내며, 다양성이 힘을 만든다는 것을 가르쳐주었습니다."
            },
            love: {
              name: "제퍼",
              role: "영혼의 동반자",
              desc: "부드러운 산들바람이 스팀 걸의 마법을 먼 거리까지 운반해주는 공기 원소입니다. 함께 그들은 전체 영역에 기쁨을 가져다주는 날씨 패턴을 만들어냅니다."
            },
            community: {
              name: "엘리멘트 시티",
              role: "집과 마음",
              desc: "모든 원소가 조화롭게 살아가는 다양한 도시로, 스팀 걸의 중재 노력 덕분에 가능해졌습니다. 모든 시민들은 어려울 때 그녀를 의지할 수 있다는 것을 알고 있습니다."
            }
          },
          fanart: {
            title: "팬들에 의해 재상상된",
            subtitle: "전 세계 아티스트들이 그들만의 독특한 창작 렌즈를 통해 스팀 걸의 모험, 힘, 그리고 성격을 어떻게 상상하는지 보세요.",
            art1: {
              title: "크리스탈 하모니",
              artist: "by AquaFire_Artist",
              desc: "애니메이션 스타일의 스팀 걸이 불과 물 정령들 사이에 결정화된 증기의 다리를 만드는 모습."
            },
            art2: {
              title: "타이니 스팀",
              artist: "by ChibiMaster92"
            },
            art3: {
              title: "스톰 칼머",
              artist: "by ElementalWarrior"
            },
            art4: {
              title: "미스티 모닝",
              artist: "by WatercolorWizard"
            },
            art5: {
              title: "이너 라이트",
              artist: "by DigitalDreamer"
            },
            art6: {
              title: "메카니컬 매직",
              artist: "by SteamPunkArt"
            },
            submit: {
              title: "당신의 비전을 공유하세요",
              desc: "스팀 걸 팬 아트를 만드셨나요? 당신의 해석을 보고 싶어요!",
              artist_label: "아티스트 이름",
              artist_placeholder: "당신의 예술가 별명",
              title_label: "작품 제목",
              title_placeholder: "당신의 창작물에 이름을 지어주세요",
              desc_label: "설명",
              desc_placeholder: "당신의 예술적 비전에 대해 알려주세요...",
              file_label: "작품 업로드",
              button: "당신의 아트 제출하기"
            }
          }
        },
        growth: {
          hero: {
            title: "모든 불꽃은 작은 불꽃에서 시작됩니다",
            subtitle: "스팀 걸의 마법적 진화가 펼쳐지는 것을 지켜보세요 – 호기심 많은 아이에서 현명한 중재자까지, 그녀의 여정의 각 단계가 오늘날 그녀가 된 다리 건설자를 만들어냈습니다."
          },
          preview: {
            childhood: "어린 시절",
            adolescence: "청소년기",
            mastery: "숙련"
          },
          nav: {
            childhood: "어린 시절",
            childhood_ages: "3-10세",
            teenage: "10대",
            teenage_ages: "11-17세",
            adulthood: "성인기",
            adulthood_ages: "18세+"
          },
          childhood: {
            title: "작은 불꽃, 큰 꿈",
            age: "3-10세",
            discovery: {
              title: "발견",
              text1: "어린 스팀 걸의 힘은 속삭이는 숲에서의 가족 캠핑 여행 중에 처음 나타났습니다. 저녁 준비를 돕다가 실수로 첫 번째 증기 구름을 만들었을 때, 양부모인 블레이즈와 마리나는 딸이 특별한 운명을 가지고 있다는 것을 알았습니다.",
              text2: "\"엄마, 봐요! 물과 불이 함께 춤춰요!\" 그녀는 작은 손 주위에서 소용돌이치는 작은 증기 조각들을 보며 킥킥거렸습니다. 그것은 그녀가 세계들 사이의 다리가 될 것이라는 첫 번째 신호였습니다."
            },
            powers: {
              title: "새롭게 나타나는 능력들",
              weather: {
                title: "감정적 날씨",
                desc: "그녀가 행복할 때 방이 따뜻해지고, 슬플 때 시원해집니다. 그녀의 감정이 작은 날씨 시스템을 만들어냈습니다."
              },
              bubbles: {
                title: "킥킥거리는 거품들",
                desc: "절대 터지지 않고 만지면 웃는 것 같은 물방울들로, 다른 아이들에게 기쁨을 가져다주었습니다."
              },
              flames: {
                title: "간지럽히는 불꽃들",
                desc: "손가락 주위에서 춤추는 작은 불꽃들로, 따뜻하고 편안하지만 절대 태우지 않았습니다."
              },
              clouds: {
                title: "숨바꼭질 구름들",
                desc: "마법적인 게임과 친구들을 웃게 만드는 데 완벽한 작은 증기 구름들."
              }
            },
            moments: {
              title: "결정적인 순간들",
              age4: {
                age: "4세",
                title: "원소 학교 첫날",
                desc: "긴장해서 실수로 무지개색 증기를 만들어냈지만, 모든 사람들이 그녀를 비웃는 대신 미소를 짓게 했습니다."
              },
              age6: {
                age: "6세",
                title: "대가뭄",
                desc: "아직 자신의 힘을 완전히 이해하지 못했지만 비구름을 만들어 작은 가뭄을 끝내는 데 도움을 주었습니다."
              },
              age8: {
                age: "8세",
                title: "장로 미스트와의 만남",
                desc: "그녀의 희귀한 이중 원소 본성을 알아본 미래의 멘토와의 첫 만남."
              },
              age10: {
                age: "10세",
                title: "페트리코와의 우정",
                desc: "그녀의 비가 페트리코의 첫 정원이 자라는 데 도움을 주면서 땅 원소인 가장 친한 친구를 만났습니다."
              }
            },
            quote: {
              text: "\"어릴 때는 모든 것이 마법처럼 느껴져요. 저는 그것이 정말 마법이라고 믿는 것을 그만두지 않았을 뿐이에요.\"",
              cite: "— 스팀 걸, 어린 시절을 회상하며"
            }
          }
        },
        footer: {
          copyright: "© 2024 스팀 걸 유니버스. 🔥와 💧로 만들어졌습니다",
          fanart: "팬 아트",
          community: "커뮤니티",
          downloads: "다운로드"
        }
      }
    };
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initParticleSystem();
    this.initScrollAnimations();
    this.initThemeToggle();
    this.initLanguageToggle();
    this.initImageEffects();
    this.loadSavedTheme();
    this.loadSavedLanguage();
  }

  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Language toggle
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', () => this.toggleLanguage());
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Window resize handler
    window.addEventListener('resize', () => this.handleResize());
    
    // Page visibility change for performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAnimations();
      } else {
        this.resumeAnimations();
      }
    });
  }

  // Theme Management
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
      themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
      setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }

    localStorage.setItem('steamgirl-theme', this.currentTheme);
    this.updateParticleColors();
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('steamgirl-theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      document.documentElement.setAttribute('data-theme', this.currentTheme);
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
      }
    }
  }

  // Language Management
  initLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.setAttribute('data-lang', this.currentLanguage.toUpperCase());
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ko' : 'en';
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.setAttribute('data-lang', this.currentLanguage.toUpperCase());
      
      // Animation effect
      languageToggle.style.transform = 'scale(1.2) rotate(180deg)';
      setTimeout(() => {
        languageToggle.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }

    localStorage.setItem('steamgirl-language', this.currentLanguage);
    this.updatePageLanguage();
  }

  updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getNestedValue(this.translations[this.currentLanguage], key);
      
      if (translation) {
        // Handle different types of elements
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
          element.placeholder = translation;
        } else {
          // Replace **text** with <strong>text</strong> for bold formatting
          const formattedText = translation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          element.innerHTML = formattedText;
        }
      }
    });

    // Update page title
    if (this.currentLanguage === 'ko') {
      document.title = '스팀 걸 - 불과 물이 만나는 곳';
    } else {
      document.title = 'Steam Girl - Where Fire Meets Water';
    }
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('steamgirl-language');
    if (savedLanguage && this.translations[savedLanguage]) {
      this.currentLanguage = savedLanguage;
      this.updatePageLanguage();
      
      const languageToggle = document.getElementById('language-toggle');
      if (languageToggle) {
        languageToggle.setAttribute('data-lang', this.currentLanguage.toUpperCase());
      }
    }
  }

  // Particle System
  initParticleSystem() {
    this.canvas = document.getElementById('particle-canvas');
    if (!this.canvas) {
      // Create canvas if it doesn't exist
      this.canvas = document.createElement('canvas');
      this.canvas.id = 'particle-canvas';
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '1';
      
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.appendChild(this.canvas);
      }
    }

    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      this.createParticles();
      this.animateParticles();
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      this.canvas.width = heroSection.offsetWidth;
      this.canvas.height = heroSection.offsetHeight;
    }
  }

  createParticles() {
    this.particles = [];
    const particleCount = Math.min(50, Math.floor(this.canvas.width / 20));
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.5 ? 'fire' : 'water',
        life: Math.random() * 100 + 100
      });
    }
  }

  animateParticles() {
    if (!this.ctx || !this.canvas) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.life--;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
      
      // Remove dead particles
      if (particle.life <= 0) {
        this.particles.splice(index, 1);
        // Create new particle
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          type: Math.random() > 0.5 ? 'fire' : 'water',
          life: Math.random() * 100 + 100
        });
        return;
      }
      
      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      
      if (particle.type === 'fire') {
        const gradient = this.ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, '#FF8C42');
        gradient.addColorStop(1, '#FF6B6B');
        this.ctx.fillStyle = gradient;
      } else {
        const gradient = this.ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, '#4DA8DA');
        gradient.addColorStop(1, '#95E1D3');
        this.ctx.fillStyle = gradient;
      }
      
      this.ctx.fill();
      this.ctx.restore();
    });
    
    this.animationFrame = requestAnimationFrame(() => this.animateParticles());
  }

  updateParticleColors() {
    // Update particle colors based on theme
    this.particles.forEach(particle => {
      if (this.currentTheme === 'dark') {
        particle.opacity *= 1.5; // Brighter in dark mode
      } else {
        particle.opacity *= 0.8; // Dimmer in light mode
      }
    });
  }

  // Scroll Animations
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          this.triggerElementAnimation(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.power-card, .timeline-item, .stage-content').forEach(el => {
      observer.observe(el);
    });
  }

  triggerElementAnimation(element) {
    // Add specific animations based on element type
    if (element.classList.contains('power-card')) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }
    
    if (element.classList.contains('timeline-item')) {
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }
  }

  // Image Effects
  initImageEffects() {
    // Add hover effects to character images
    document.querySelectorAll('.main-image, .profile-img, .stage-img, .timeline-img').forEach(img => {
      img.addEventListener('mouseenter', (e) => this.addImageGlow(e.target));
      img.addEventListener('mouseleave', (e) => this.removeImageGlow(e.target));
    });
  }

  addImageGlow(img) {
    const glowEffect = document.createElement('div');
    glowEffect.className = 'image-glow-effect';
    glowEffect.style.position = 'absolute';
    glowEffect.style.inset = '0';
    glowEffect.style.borderRadius = getComputedStyle(img).borderRadius;
    glowEffect.style.background = 'radial-gradient(circle, rgba(255,140,66,0.3), rgba(77,168,218,0.3))';
    glowEffect.style.opacity = '0';
    glowEffect.style.transition = 'opacity 0.3s ease';
    glowEffect.style.pointerEvents = 'none';
    
    const container = img.parentElement;
    if (container && getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    container.appendChild(glowEffect);
    
    setTimeout(() => {
      glowEffect.style.opacity = '1';
    }, 10);
  }

  removeImageGlow(img) {
    const container = img.parentElement;
    const glowEffect = container.querySelector('.image-glow-effect');
    if (glowEffect) {
      glowEffect.style.opacity = '0';
      setTimeout(() => {
        if (glowEffect.parentElement) {
          glowEffect.parentElement.removeChild(glowEffect);
        }
      }, 300);
    }
  }

  // Performance Management
  handleResize() {
    if (this.canvas) {
      this.resizeCanvas();
      this.createParticles(); // Recreate particles for new canvas size
    }
  }

  pauseAnimations() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  resumeAnimations() {
    if (!this.animationFrame && this.canvas) {
      this.animateParticles();
    }
  }

  // Steam Cursor Effect
  initSteamCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'steam-cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'radial-gradient(circle, rgba(255,228,196,0.8), transparent)';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '10000';
    cursor.style.transition = 'opacity 0.2s ease';
    document.body.appendChild(cursor);

    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      
      // Create trail effect
      trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      
      // Limit trail length
      if (trail.length > 5) {
        trail.shift();
      }
      
      // Draw trail
      this.drawSteamTrail(trail);
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
  }

  drawSteamTrail(trail) {
    // Remove old trail elements
    document.querySelectorAll('.steam-trail').forEach(el => el.remove());
    
    trail.forEach((point, index) => {
      const trailElement = document.createElement('div');
      trailElement.className = 'steam-trail';
      trailElement.style.position = 'fixed';
      trailElement.style.left = point.x - 5 + 'px';
      trailElement.style.top = point.y - 5 + 'px';
      trailElement.style.width = '10px';
      trailElement.style.height = '10px';
      trailElement.style.background = `rgba(255,228,196,${0.8 - index * 0.15})`;
      trailElement.style.borderRadius = '50%';
      trailElement.style.pointerEvents = 'none';
      trailElement.style.zIndex = '9999';
      document.body.appendChild(trailElement);
      
      // Remove after animation
      setTimeout(() => {
        if (trailElement.parentElement) {
          trailElement.parentElement.removeChild(trailElement);
        }
      }, 500);
    });
  }

  // Growth Page Timeline Navigation
  initTimelineNavigation() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const growthStages = document.querySelectorAll('.growth-stage');

    timelineButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetStage = btn.getAttribute('data-stage');
        
        // Update active button
        timelineButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show target stage
        growthStages.forEach(stage => {
          stage.classList.remove('active');
          if (stage.id === targetStage) {
            stage.classList.add('active');
            stage.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    });
  }

  // Form Handlers
  initFormHandlers() {
    // Fan art submission form
    const submissionForm = document.querySelector('.submission-form');
    if (submissionForm) {
      submissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleArtSubmission(submissionForm);
      });
    }

    // Poll voting
    const pollForm = document.querySelector('.vision-poll');
    if (pollForm) {
      const submitBtn = pollForm.querySelector('.poll-submit');
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          this.handlePollVote(pollForm);
        });
      }
    }
  }

  handleArtSubmission(form) {
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Uploading...';
    submitBtn.disabled = true;
    
    // Simulate upload (replace with actual submission logic)
    setTimeout(() => {
      this.showNotification('Thank you! Your artwork has been submitted for review.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  handlePollVote(pollForm) {
    const selectedOption = pollForm.querySelector('input[name="future-path"]:checked');
    if (!selectedOption) {
      this.showNotification('Please select an option before voting.', 'warning');
      return;
    }

    // Update vote count (simulate)
    const voteCount = selectedOption.parentElement.querySelector('.vote-count');
    const currentCount = parseInt(voteCount.textContent) || 0;
    voteCount.textContent = currentCount + 1;

    this.showNotification('Thank you for your vote!', 'success');
    
    // Disable form to prevent multiple votes
    pollForm.querySelectorAll('input').forEach(input => input.disabled = true);
    pollForm.querySelector('.poll-submit').disabled = true;
  }

  // Notification System
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '10px';
    notification.style.background = type === 'success' ? '#4DA8DA' : 
                                   type === 'warning' ? '#FF8C42' : '#95E1D3';
    notification.style.color = 'white';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '10001';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentElement) {
          notification.parentElement.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.steamGirlSite = new SteamGirlSite();
});

// Add CSS for animations that need to be applied via JavaScript
const dynamicCSS = `
  .power-card, .timeline-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .power-card.animate-in, .timeline-item.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .steam-cursor {
    filter: blur(2px);
    background: radial-gradient(circle, rgba(255,228,196,0.8), rgba(255,140,66,0.4), transparent);
  }

  .notification {
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  #particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
`;

// Inject dynamic CSS
const styleElement = document.createElement('style');
styleElement.textContent = dynamicCSS;
document.head.appendChild(styleElement); 