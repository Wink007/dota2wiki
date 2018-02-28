"use strict";var precacheConfig=[["/dota2wiki/index.html","8036186ee80a721d6d17950988f54cd7"],["/dota2wiki/static/css/main.a12cc1b6.css","0c9f6df9083f353d8891a92d0d21a34c"],["/dota2wiki/static/js/main.b147aa5b.js","ff09664a79d03bad2c29950ff60efa32"],["/dota2wiki/static/media/1.3931cd18.png","3931cd18d906476f4a3e1958cf0a387f"],["/dota2wiki/static/media/22.7fca635e.png","7fca635ec0f607cac43142a97f3c3f13"],["/dota2wiki/static/media/3.0c9079f4.png","0c9079f4d5b7dafbdfc599567510ebcc"],["/dota2wiki/static/media/Abyssal_Blade_icon.dcf2b724.png","dcf2b7246b0acae950f921ad48982be6"],["/dota2wiki/static/media/Aeon_Disk_icon.fc14d686.png","fc14d686a9741b52e03592f340b43bdb"],["/dota2wiki/static/media/Aether_Lens_icon.73fcd312.png","73fcd3126b3d9191b3f9af64feb2e826"],["/dota2wiki/static/media/Aghanim's_Scepter_icon.240635b3.png","240635b3601b36203bcf34047f4b0382"],["/dota2wiki/static/media/Animal_Courier_(Radiant)_icon.77a107f4.png","77a107f486ec4923ba9e3c903d6bb344"],["/dota2wiki/static/media/Arcane_Boots_icon.d71c333e.png","d71c333e35c20ff61ba923b547ab984b"],["/dota2wiki/static/media/Armlet_of_Mordiggian_(Inactive)_icon.a69642d6.png","a69642d652aa0b5131eb134604646402"],["/dota2wiki/static/media/Assault_Cuirass_icon.4194cf78.png","4194cf78f00a24dd6ed6085941ca8d25"],["/dota2wiki/static/media/Band_of_Elvenskin_icon.09d13522.png","09d135229767f37d0505924fbfee7435"],["/dota2wiki/static/media/Battle_Fury_icon.020dea60.png","020dea608c19470bf45fad9a629691ce"],["/dota2wiki/static/media/Belt_of_Strength_icon.ed4386cc.png","ed4386cc1890cc3137e2a31b1b447ba1"],["/dota2wiki/static/media/Black_King_Bar_icon.d5739312.png","d5739312230b9220e9ee9ad37e7981a6"],["/dota2wiki/static/media/Blade_Mail_icon.52139a5b.png","52139a5ba059c9526cb1355e3f0ff6f5"],["/dota2wiki/static/media/Blade_of_Alacrity_icon.1dc75c73.png","1dc75c7367220bf3b6131d72c8c496df"],["/dota2wiki/static/media/Blades_of_Attack_icon.4f68d44e.png","4f68d44e38899c86404113e027e2dfc2"],["/dota2wiki/static/media/Blight_Stone_icon.cc8d80c4.png","cc8d80c4edce2e5b44522120ab1b6a6f"],["/dota2wiki/static/media/Blink_Dagger_icon.250bb526.png","250bb52627bfc5d0a31265c4659217e5"],["/dota2wiki/static/media/Bloodstone_icon.4092ffd7.png","4092ffd738f132c74e796a08f7c3330f"],["/dota2wiki/static/media/Bloodthorn_icon.fb0751ab.png","fb0751ab1fa3ba9eb7c46063a72284f4"],["/dota2wiki/static/media/Boots_of_Speed_icon.6c6f874a.png","6c6f874a3cefdea05f529d5369a8ac10"],["/dota2wiki/static/media/Boots_of_Travel_1_icon.9c427a44.png","9c427a44c234a3e382f03e20a1dd9ce2"],["/dota2wiki/static/media/Bottle_(Full)_icon.39943668.png","39943668839fdb0bb0d256343bd162f9"],["/dota2wiki/static/media/Bracer_icon.551cdecc.png","551cdecc43460c6d544d0aaf355ca01f"],["/dota2wiki/static/media/Broadsword_icon.91d9b031.png","91d9b0316ae5bfbc330db6602ef8b770"],["/dota2wiki/static/media/Buckler_icon.e20a0518.png","e20a0518ba7f15cd51d9bd2db9ac6213"],["/dota2wiki/static/media/Butterfly_icon.4a41b950.png","4a41b950aa108a9a171fe705ce4a790c"],["/dota2wiki/static/media/Chainmail_icon.89865d3a.png","89865d3aeff7d30086865cbbe71151d4"],["/dota2wiki/static/media/Circlet_icon.5766fa60.png","5766fa605bf5f9a12f696cc657e4eb61"],["/dota2wiki/static/media/Clarity_icon.127422a9.png","127422a90b063d95070cf1128001288c"],["/dota2wiki/static/media/Claymore_icon.83776979.png","83776979c185af498818d2612726d699"],["/dota2wiki/static/media/Cloak_icon.3a4dfd95.png","3a4dfd95e4e4caac5cc447f3d02db471"],["/dota2wiki/static/media/Crimson_Guard_icon.a2dd7bda.png","a2dd7bdaa4a8a6691c9414d2b65219ca"],["/dota2wiki/static/media/Crystalys_icon.d0918eec.png","d0918eec6f7cf03141d2be6888955725"],["/dota2wiki/static/media/Daedalus_icon.201b643c.png","201b643c7f7af988dcd90af52ee757fd"],["/dota2wiki/static/media/Dagon_1_icon.c79b3bff.png","c79b3bff02749be08718b936b0183b2a"],["/dota2wiki/static/media/Demon_Edge_icon.c7eafdd7.png","c7eafdd7952d21a897933d643ee3ecb1"],["/dota2wiki/static/media/Desolator_icon.0a7aa640.png","0a7aa640f3c1c1a2046edc361887a4f5"],["/dota2wiki/static/media/Diffusal_Blade_1_icon.19e3c8d2.png","19e3c8d23c198cd9e92d765f83109d50"],["/dota2wiki/static/media/Divine_Rapier_icon.c0e1decd.png","c0e1decd49c4828e84de9fd82b9c1d93"],["/dota2wiki/static/media/Dragon_Lance_icon.61af684a.png","61af684ad38f803f3417dd15d457a2e8"],["/dota2wiki/static/media/Drum_of_Endurance_icon.0732ad8d.png","0732ad8dffa21eb2215dab889f318d01"],["/dota2wiki/static/media/Dust_of_Appearance_icon.faff92ac.png","faff92ac3e9a87d58f4aefffb0bea3a1"],["/dota2wiki/static/media/Eaglesong_icon.d07e2546.png","d07e254615f3641a14cda45291af297d"],["/dota2wiki/static/media/Echo_Sabre_icon.a5c95a39.png","a5c95a39ce5e666280b2e2b502a90dd5"],["/dota2wiki/static/media/Enchanted_Mango_icon.4e06af10.png","4e06af109c2499a1e3d749726d7207a8"],["/dota2wiki/static/media/Energy_Booster_icon.4cef964a.png","4cef964a300f5dcd4d00f14b2b975321"],["/dota2wiki/static/media/Ethereal_Blade_icon.bb00be2d.png","bb00be2d7d2fcf31c1d638315b457c81"],["/dota2wiki/static/media/Eul's_Scepter_of_Divinity_icon.743b469f.png","743b469fcd2fe604dcd6de5963e9f1ac"],["/dota2wiki/static/media/Eye_of_Skadi_icon.c33ee90e.png","c33ee90ed429360d62ba038bf9e6d672"],["/dota2wiki/static/media/Faerie_Fire_icon.72081b2a.png","72081b2a7ae8677e8a96ec0e30c52538"],["/dota2wiki/static/media/Force_Staff_icon.acfc1f5a.png","acfc1f5abe69a4497fc4882ca7593482"],["/dota2wiki/static/media/Gauntlets_of_Strength_icon.23edb10c.png","23edb10c70d5cf198c0e98c764323b7f"],["/dota2wiki/static/media/Gem_of_True_Sight_icon.abe36b41.png","abe36b416facdb5dff1c28ad9bb9d865"],["/dota2wiki/static/media/Ghost_Scepter_icon.c73d1f34.png","c73d1f34fcd4be3df26138ae4e784b53"],["/dota2wiki/static/media/Glimmer_Cape_icon.87502924.png","875029249e5f3bb728d22fb784e92f3f"],["/dota2wiki/static/media/Gloves_of_Haste_icon.edbc2497.png","edbc24977e1c68afe36eebabc3daedf3"],["/dota2wiki/static/media/Guardian_Greaves_icon.f9ca4a17.png","f9ca4a17541016f6a10f35ccc630c1b4"],["/dota2wiki/static/media/Hand_of_Midas_icon.69239746.png","692397463fd405f7762128c43b9aef16"],["/dota2wiki/static/media/Headdress_icon.d731d1c5.png","d731d1c594447b80fced88e53ce33688"],["/dota2wiki/static/media/Healing_Salve_icon.27a6f911.png","27a6f91158f966dc51b0439b554824bb"],["/dota2wiki/static/media/Heart_of_Tarrasque_icon.833c443b.png","833c443b1ee600ccb535e14df44eaa1e"],["/dota2wiki/static/media/Heaven's_Halberd_icon.61b00b3b.png","61b00b3bb1137aa5e39cec56be7415bb"],["/dota2wiki/static/media/Helm_of_Iron_Will_icon.18e0b6e9.png","18e0b6e97c9d1e62484ef82b4f191874"],["/dota2wiki/static/media/Helm_of_the_Dominator_icon.0ec0c985.png","0ec0c9853537f7a6ef639dda8515b731"],["/dota2wiki/static/media/Hood_of_Defiance_icon.ac746406.png","ac7464063953ecd4811afc2f1aaa722f"],["/dota2wiki/static/media/Hurricane_Pike_icon.c00ff593.png","c00ff5937284ef3801e1dcb2cf3025c8"],["/dota2wiki/static/media/Hyperstone_icon.f043a3ee.png","f043a3ee7556cbeafc3d349b3b164fe9"],["/dota2wiki/static/media/Infused_Raindrop_icon.2d795df2.png","2d795df2ba5ff7d7bebcd4cd9b73cbdf"],["/dota2wiki/static/media/Iron_Branch_icon.53c78fa6.png","53c78fa6555497232d9027df514678d6"],["/dota2wiki/static/media/Javelin_icon.5d3351f3.png","5d3351f37b700b11f59d501e7f7f786e"],["/dota2wiki/static/media/Kaya_icon.58924ae0.png","58924ae0f87ae8e75739fde004df8f14"],["/dota2wiki/static/media/Linken's_Sphere_icon.daa0af15.png","daa0af1579c01c078ade3bf4c2db473e"],["/dota2wiki/static/media/Lotus_Orb_icon.aff56102.png","aff5610251bb48b5b81a026e5fb849f7"],["/dota2wiki/static/media/Maelstrom_icon.59ac319f.png","59ac319f23601cd032ba5f0742b67655"],["/dota2wiki/static/media/Magic_Stick_icon.39730e23.png","39730e2362dd83079e215c88ac2057ee"],["/dota2wiki/static/media/Magic_Wand_icon.fdb0a1c9.png","fdb0a1c976a6f6708610f0ae313c2d5a"],["/dota2wiki/static/media/Main_Shop.c02744fe.png","c02744fe111afa87a0a5ec138c640453"],["/dota2wiki/static/media/Manta_Style_icon.69b6ecb1.png","69b6ecb140751276823e1def0a7b22b0"],["/dota2wiki/static/media/Mantle_of_Intelligence_icon.9e231239.png","9e2312393cb75083efe6eaf013719769"],["/dota2wiki/static/media/Mask_of_Madness_icon.dbccfa14.png","dbccfa14da2503140a1fb2c17ec01646"],["/dota2wiki/static/media/Medallion_of_Courage_icon.0edc3cc6.png","0edc3cc66d8d12637996a3c59b1cafe7"],["/dota2wiki/static/media/Mekansm_icon.4713c4c5.png","4713c4c53b4763b6c8f36d1419b633ab"],["/dota2wiki/static/media/Meteor_Hammer_icon.97770efd.png","97770efd8ce1f4eeb3a5e6f7f6524cbc"],["/dota2wiki/static/media/Mithril_Hammer_icon.4c59bd67.png","4c59bd67d73e2c48d925d178431e6b59"],["/dota2wiki/static/media/Mjollnir_icon.53252e46.png","53252e46ea2905059760569bd4068759"],["/dota2wiki/static/media/Monkey_King_Bar_icon.7ca65e16.png","7ca65e167b8e86ae8d89a8655844792c"],["/dota2wiki/static/media/Moon_Shard_icon.3390933e.png","3390933e57b2a4f991afdac7e916f164"],["/dota2wiki/static/media/Morbid_Mask_icon.341fbcce.png","341fbcceaddbb711335f91560c09846f"],["/dota2wiki/static/media/Mystic_Staff_icon.9dbe600c.png","9dbe600cd33915fbc5c0465b3119edc8"],["/dota2wiki/static/media/Necronomicon_1_icon.fe9c04a8.png","fe9c04a84a85f91b4702de0b5e79df6e"],["/dota2wiki/static/media/Null_Talisman_icon.301780b3.png","301780b37a72809cb6f1a8b425e2a985"],["/dota2wiki/static/media/Nullifier_icon.36e5bcb5.png","36e5bcb5c793cd82448b3bdf99824dcf"],["/dota2wiki/static/media/Oblivion_Staff_icon.8471d307.png","8471d307eef10a671b10b543a1b1400e"],["/dota2wiki/static/media/Observer_Ward_icon.00b195e4.png","00b195e4d5db02ef6d5ed08f34bb12d5"],["/dota2wiki/static/media/Octarine_Core_icon.8859e78e.png","8859e78ecfdc3106c89fe31aaa71eafb"],["/dota2wiki/static/media/Ogre_Axe_icon.49440e68.png","49440e68467720c7cc0ab90d5949b7a9"],["/dota2wiki/static/media/Orb_of_Venom_icon.d18d47e2.png","d18d47e200941f3191c90f69b7b87e73"],["/dota2wiki/static/media/Orchid_Malevolence_icon.b397348a.png","b397348ac8dee535655d0b47da40fcb0"],["/dota2wiki/static/media/Perseverance_icon.d19a49d5.png","d19a49d5d761f2ba32ca61aae5a3c6a1"],["/dota2wiki/static/media/Phase_Boots_icon.d8f00fa7.png","d8f00fa7d7867204fa19d880863c2339"],["/dota2wiki/static/media/Pipe_of_Insight_icon.010172be.png","010172be0c1ed756315325c0390d9366"],["/dota2wiki/static/media/Platemail_icon.f2ccebd9.png","f2ccebd91385d347468859ed640b349b"],["/dota2wiki/static/media/Point_Booster_icon.9c65aa09.png","9c65aa0917cc319d0b4fb286657b2b4c"],["/dota2wiki/static/media/Power_Treads_icon.c1d6d8eb.png","c1d6d8eba8eb6fbadc6556b93d32e7cb"],["/dota2wiki/static/media/Quarterstaff_icon.5c17e4ab.png","5c17e4ab4577b1807deb2a2452d46a17"],["/dota2wiki/static/media/Quelling_Blade_icon.b0f075a8.png","b0f075a8020e95b01de7072aedb71bf0"],["/dota2wiki/static/media/Radiance_(Active)_icon.43b71504.png","43b71504277dcc7f8f998fa0acaffe3a"],["/dota2wiki/static/media/Reaver_icon.4acf903d.png","4acf903d14257a9b8907eb898bc73c0f"],["/dota2wiki/static/media/Refresher_Orb_icon.d3295c55.png","d3295c55a5a8fa7c6d1b5fb616773967"],["/dota2wiki/static/media/Ring_of_Aquila_(Active)_icon.0f37a873.png","0f37a873f06cfec2be5427fd7b58d5a2"],["/dota2wiki/static/media/Ring_of_Basilius_(Inactive)_icon.bc81816f.png","bc81816fb885a12a484ae261cec71df6"],["/dota2wiki/static/media/Ring_of_Health_icon.e8a7c0f5.png","e8a7c0f5bb4cf10d6f0a47db6dad1a2f"],["/dota2wiki/static/media/Ring_of_Protection_icon.a6824b0d.png","a6824b0d24b9870ee7b13285cb276040"],["/dota2wiki/static/media/Ring_of_Regen_icon.60cbfa83.png","60cbfa834031c3df3873d9524c1652b4"],["/dota2wiki/static/media/Robe_of_the_Magi_icon.34ce8ab5.png","34ce8ab567663c7c19a4ac751ea793b4"],["/dota2wiki/static/media/Rod_of_Atos_icon.291eddc6.png","291eddc6bac5434e47569809d551f542"],["/dota2wiki/static/media/Sacred_Relic_icon.a338b804.png","a338b80403380ea3056faaf538a3988b"],["/dota2wiki/static/media/Sages_Mask_icon.0e218d46.png","0e218d464499fa4202aec1c17481404d"],["/dota2wiki/static/media/Sange_and_Yasha_icon.27abcd3e.png","27abcd3e1580389f8fe5f6bab0f785c9"],["/dota2wiki/static/media/Sange_icon.0a4af64a.png","0a4af64a98d86a8eece1f96ed37e78d2"],["/dota2wiki/static/media/Satanic_icon.63ec5988.png","63ec59885644341d3b381596270a850a"],["/dota2wiki/static/media/Scythe_of_Vyse_icon.ee2afa37.png","ee2afa37c24bde6b6e3adcdf657857bd"],["/dota2wiki/static/media/Secret_Shop.5978119d.png","5978119d748b6fa16ae959619c227122"],["/dota2wiki/static/media/Sentry_Ward_icon.305f8282.png","305f82821365291765d0c9036883a1fe"],["/dota2wiki/static/media/Shadow_Amulet_icon.16613b5c.png","16613b5c7f97c397d39f2b6df9d9c156"],["/dota2wiki/static/media/Shadow_Blade_icon.1205649f.png","1205649fa7b02d789798f8785a242e9b"],["/dota2wiki/static/media/Shiva's_Guard_icon.26fa868a.png","26fa868a19970b571e91d774cb8b7311"],["/dota2wiki/static/media/Side_Lane_Shop.5c8aec6b.png","5c8aec6b10304a80b5526b35d0822b31"],["/dota2wiki/static/media/Silver_Edge_icon.4d987ec3.png","4d987ec3fd7eab11a9783982c4e7c6b0"],["/dota2wiki/static/media/Skull_Basher_icon.125c4f98.png","125c4f98698cb878a96c42fd010eb79b"],["/dota2wiki/static/media/Slippers_of_Agility_icon.189c09b5.png","189c09b527a405a027b86db872536d80"],["/dota2wiki/static/media/Smoke_of_Deceit_icon.52d2a9bf.png","52d2a9bf0a1c77cf05e9c50dec69c6b8"],["/dota2wiki/static/media/Solar_Crest_icon.49ca5c7a.png","49ca5c7a4bcb6069dbce9a822b72083e"],["/dota2wiki/static/media/Soul_Booster_icon.e258a519.png","e258a5198bb454bdac82decfaaa7bc74"],["/dota2wiki/static/media/Soul_Ring_icon.ae7182a5.png","ae7182a5abf86e32b6ce2bd7c65a6365"],["/dota2wiki/static/media/Spirit_Vessel_icon.a805a235.png","a805a235bab8fcf561fc0165f3c5a055"],["/dota2wiki/static/media/Staff_of_Wizardry_icon.1c667e74.png","1c667e744d2405279b8a2f83a28810ab"],["/dota2wiki/static/media/Stout_Shield_icon.abd6e4ab.png","abd6e4abf76a97779b8ab4ce8776373b"],["/dota2wiki/static/media/Talisman_of_Evasion_icon.2424653f.png","2424653f8e68553128554b7dc163cba2"],["/dota2wiki/static/media/Tango_icon.a1dd746a.png","a1dd746a0588d1417be8beec491a7e6b"],["/dota2wiki/static/media/Tome_of_Knowledge_icon.3543cff0.png","3543cff0432f73ade00e8b598272591e"],["/dota2wiki/static/media/Town_Portal_Scroll_icon.f29e0d88.png","f29e0d8812eba00374a00b76d360cc40"],["/dota2wiki/static/media/Tranquil_Boots_(Active)_icon.cc5d60d9.png","cc5d60d946103f2db57901ee3754ca58"],["/dota2wiki/static/media/Ultimate_Orb_icon.63e8346e.png","63e8346ed72c4fc926ad4c59068e06c2"],["/dota2wiki/static/media/Urn_of_Shadows_icon.845a2cd3.png","845a2cd3fc5a7f15cde79ac028649e71"],["/dota2wiki/static/media/Vanguard_icon.19eda0c1.png","19eda0c1dd1fda9001ec3aea49d7d16e"],["/dota2wiki/static/media/Veil_of_Discord_icon.eb039ec8.png","eb039ec8553a8441ffe0afb171d34016"],["/dota2wiki/static/media/Vitality_Booster_icon.7d0d7b18.png","7d0d7b18972fe533f671858fbee6f6b8"],["/dota2wiki/static/media/Vladmir's_Offering_icon.c265d966.png","c265d9667ef832f65a2df0abac7c830a"],["/dota2wiki/static/media/Void_Stone_icon.6b96ad45.png","6b96ad4508df279aa4f846707d4b23aa"],["/dota2wiki/static/media/Wind_Lace_icon.df03f228.png","df03f22813c11934343fca884115333d"],["/dota2wiki/static/media/Wraith_Band_icon.d82a26a6.png","d82a26a64d3bc59ba9ac9a056df695a6"],["/dota2wiki/static/media/Yasha_icon.6f3c1cb9.png","6f3c1cb9fb5ff883f68b8888203229e6"],["/dota2wiki/static/media/am.91b2b2a5.png","91b2b2a5ebd201ec62d237013ef93f11"],["/dota2wiki/static/media/dota2main.e17133a1.png","e17133a13707520695af0dda08d81d2e"],["/dota2wiki/static/media/gold.5ce47a21.png","5ce47a2172241248e5933e67591bce22"],["/dota2wiki/static/media/lich.3767e145.png","3767e145b5566637dfa823f8f0481317"],["/dota2wiki/static/media/minimap.6a9a9a66.png","6a9a9a666072cd3f16d32c815cf6c34d"],["/dota2wiki/static/media/minimap_all.82284395.png","822843956b6d7be70fe5bddae70613dc"],["/dota2wiki/static/media/pa.643e92b3.png","643e92b32eceb1a69bfe3351dd269ea8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,i){var e=new URL(a);return"/"===e.pathname.slice(-1)&&(e.pathname+=i),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(i){return new Response(i,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,i,e,c){var d=new URL(a);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(i)+"="+encodeURIComponent(e)),d.toString()},isPathWhitelisted=function(a,i){if(0===a.length)return!0;var e=new URL(i).pathname;return a.some(function(a){return e.match(a)})},stripIgnoredUrlParameters=function(a,i){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return i.every(function(i){return!i.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var i=a[0],e=a[1],c=new URL(i,self.location),d=createCacheKey(c,hashParamName,e,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(i){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!i.has(e)){var c=new Request(e,{credentials:"same-origin"});return fetch(c).then(function(i){if(!i.ok)throw new Error("Request for "+e+" returned a response with status "+i.status);return cleanResponse(i).then(function(i){return a.put(e,i)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var i=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!i.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var i,e=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(i=urlsToCacheKeys.has(e))||(e=addDirectoryIndex(e,c),i=urlsToCacheKeys.has(e));var d="/dota2wiki/index.html";!i&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(e=new URL(d,self.location).toString(),i=urlsToCacheKeys.has(e)),i&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(e)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(i){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,i),fetch(a.request)}))}});