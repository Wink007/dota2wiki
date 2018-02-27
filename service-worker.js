"use strict";var precacheConfig=[["/dota2wiki/index.html","61af239ed10876746069a8fbe24e6958"],["/dota2wiki/static/css/main.23c5400c.css","a0adbc5b5c2d0454635d9311a50a3227"],["/dota2wiki/static/js/main.833ff3e6.js","b85f88d33b93e5ce7f0b320b0a91dda8"],["/dota2wiki/static/media/1.3d4f1979.jpg","3d4f1979a877de514c9fb51dc2f598a4"],["/dota2wiki/static/media/2.ee46446a.jpg","ee46446abd6a6cf29c73b930833c20a8"],["/dota2wiki/static/media/3.25acad52.jpg","25acad5258c0e9878864d30046938f7e"],["/dota2wiki/static/media/Abyssal_Blade_icon.8a939c9d.png","8a939c9d4fa401e27706aea9357a9aa9"],["/dota2wiki/static/media/Aeon_Disk_icon.68e1ff77.png","68e1ff77a19e8bc2bec54017e13ad040"],["/dota2wiki/static/media/Aether_Lens_icon.1a68b840.png","1a68b8409201001c930618dab9cd7bcf"],["/dota2wiki/static/media/Aghanim's_Scepter_icon.554d8488.png","554d8488d40b6af3b6c419e5eeab8f3a"],["/dota2wiki/static/media/Animal_Courier_(Radiant)_icon.8405e7ef.png","8405e7ef2ef1ce1cb0cec2df7790498f"],["/dota2wiki/static/media/Arcane_Boots_icon.60d1a909.png","60d1a909c5431bbb378df0ac5e3d5abe"],["/dota2wiki/static/media/Assault_Cuirass_icon.75425711.png","7542571112233d46331d1db57fc71228"],["/dota2wiki/static/media/Battle_Fury_icon.2dfc5b63.png","2dfc5b63a04e3059492e65a605ac1fb3"],["/dota2wiki/static/media/Black_King_Bar_icon.d275787e.png","d275787ecf15619ea638e3c0d4645ccf"],["/dota2wiki/static/media/Blade_Mail_icon.b5d550d2.png","b5d550d2218ba1486868148bf2753fff"],["/dota2wiki/static/media/Blight_Stone_icon.32372a19.png","32372a190bc30e8477ada53ad27b9a22"],["/dota2wiki/static/media/Blink_Dagger_icon.227998df.png","227998df5a9b2a37661a68a71a4540f7"],["/dota2wiki/static/media/Bloodthorn_icon.44c150bf.png","44c150bff3c81b0cc9f09180d1d0f587"],["/dota2wiki/static/media/Boots_of_Travel_1_icon.08ab7ea2.png","08ab7ea29fb3c2eb47fffa7966e844a5"],["/dota2wiki/static/media/Buckler_icon.276a21df.png","276a21dffb95089d4df002d143eff359"],["/dota2wiki/static/media/Butterfly_icon.f46154c9.png","f46154c9f6694ec8432626a1fedd444f"],["/dota2wiki/static/media/Chainmail_icon.df70136c.png","df70136c0f6b5346aae65f72b574bd59"],["/dota2wiki/static/media/Crimson_Guard_icon.db2c775f.png","db2c775f2a9ffff0fc9d55e89583d5ef"],["/dota2wiki/static/media/Crystalys_icon.596c9a36.png","596c9a361bb8f01f1e7b1487f48ce5d5"],["/dota2wiki/static/media/Daedalus_icon.4c54fc2e.png","4c54fc2e6980725aeee12437235c45fe"],["/dota2wiki/static/media/Demon_Edge_icon.99bfefcd.png","99bfefcd8830fe7f552ab410ccd1060e"],["/dota2wiki/static/media/Desolator_icon.b0deb1dd.png","b0deb1dd190c7a907d2e9348c4ac75c2"],["/dota2wiki/static/media/Diffusal_Blade_1_icon.e57c9845.png","e57c98458b912d08b3a83bf110575b8b"],["/dota2wiki/static/media/Divine_Rapier_icon.edc8b0fe.png","edc8b0fe3d8830960a7990e80625fffe"],["/dota2wiki/static/media/Dragon_Lance_icon.b932ff0f.png","b932ff0f04b5813f38265996f293fce5"],["/dota2wiki/static/media/Drum_of_Endurance_icon.aa7a068a.png","aa7a068a5077dfbf2771385948fe3cd7"],["/dota2wiki/static/media/Dust_of_Appearance_icon.79d3b276.png","79d3b276c60c1860a7516c7d4f91896a"],["/dota2wiki/static/media/Eaglesong_icon.fcc260a4.png","fcc260a45c9f28cf11c5ccad8ad36fdb"],["/dota2wiki/static/media/Echo_Sabre_icon.16837700.png","168377001086e7be21c97a6bd8007b44"],["/dota2wiki/static/media/Enchanted_Mango_icon.7bf95e9a.png","7bf95e9a4f7d44adc2b5199d419870f3"],["/dota2wiki/static/media/Energy_Booster_icon.a5d03bec.png","a5d03becb51fee95a6d104dc47ff30f1"],["/dota2wiki/static/media/Ethereal_Blade_icon.01acb3bc.png","01acb3bcd78ff2818eeb125c23efcdb8"],["/dota2wiki/static/media/Eul's_Scepter_of_Divinity_icon.8647ab1a.png","8647ab1addcce71e861cdbfa87041d75"],["/dota2wiki/static/media/Eye_of_Skadi_icon.678a8b6c.png","678a8b6ca45eb27b07de93b191cfbc2a"],["/dota2wiki/static/media/Faerie_Fire_icon.db8d15c9.png","db8d15c95295cd51952b3eb95f40e916"],["/dota2wiki/static/media/Force_Staff_icon.0bcb8a97.png","0bcb8a9785126e04194fa05ed8e0ac88"],["/dota2wiki/static/media/Gem_of_True_Sight_icon.29513e5d.png","29513e5d53435ce3397b354855708266"],["/dota2wiki/static/media/Ghost_Scepter_icon.c3fe0cfb.png","c3fe0cfb04d8aa85b6d5547819aaf3f9"],["/dota2wiki/static/media/Glimmer_Cape_icon.c31cb420.png","c31cb4206c442aef77f9489591f6ec42"],["/dota2wiki/static/media/Guardian_Greaves_icon.b1761c39.png","b1761c39fe6fd8e7ec0eb8a15a0a402b"],["/dota2wiki/static/media/Hand_of_Midas_icon.9cf870f0.png","9cf870f09b89d2e5154b6436dd2ea44a"],["/dota2wiki/static/media/Headdress_icon.93e90a52.png","93e90a527812bc77f8317358f8482a30"],["/dota2wiki/static/media/Heart_of_Tarrasque_icon.ba54f2b9.png","ba54f2b9fb82482d45dd100969e682de"],["/dota2wiki/static/media/Heaven's_Halberd_icon.4cec2fca.png","4cec2fca80ce3d72df47d5d2c00dedd1"],["/dota2wiki/static/media/Helm_of_the_Dominator_icon.3dc3708c.png","3dc3708cbd0a568970cd8f9f2ae42aa8"],["/dota2wiki/static/media/Hood_of_Defiance_icon.26bb86f5.png","26bb86f521ff7d71a017560f384577f7"],["/dota2wiki/static/media/Hurricane_Pike_icon.6668e53e.png","6668e53ea663662be1c5feccd850b6ad"],["/dota2wiki/static/media/Hyperstone_icon.8f62fb63.png","8f62fb6310ab49675c4b8f374bc02a21"],["/dota2wiki/static/media/Kaya_icon.8104c072.png","8104c072db47be6f9cefe4c61ca2e9e4"],["/dota2wiki/static/media/Linken's_Sphere_icon.aea9eff9.png","aea9eff97a6a561afef0ae903ef076fb"],["/dota2wiki/static/media/Lotus_Orb_icon.4968dfef.png","4968dfefd6c7be7ce9bb7ba84fa040d3"],["/dota2wiki/static/media/Maelstrom_icon.83cef7ae.png","83cef7ae6220d71e88d78be874ae9b4a"],["/dota2wiki/static/media/Magic_Wand_icon.8396e49b.png","8396e49b8e4e3ca067a0baf17be5fd23"],["/dota2wiki/static/media/Manta_Style_icon.e82d1fae.png","e82d1fae85bad9781327aaa5830a07c2"],["/dota2wiki/static/media/Mask_of_Madness_icon.b7e85761.png","b7e857616b2b362156f3344ad279da6f"],["/dota2wiki/static/media/Mekansm_icon.a1e6cbc3.png","a1e6cbc39b851bb4673a9de33d513055"],["/dota2wiki/static/media/Meteor_Hammer_icon.f15f8b70.png","f15f8b70e66af5b2e44f36931901bcc4"],["/dota2wiki/static/media/Mithril_Hammer_icon.4b1383da.png","4b1383da5e10e9885880e3dbfed1e35f"],["/dota2wiki/static/media/Mjollnir_icon.2179fb71.png","2179fb71889d73528325f7eac09e31c1"],["/dota2wiki/static/media/Moon_Shard_icon.f647f8db.png","f647f8dbc0d9b72205c30a6d9294713c"],["/dota2wiki/static/media/Morbid_Mask_icon.a2eafe37.png","a2eafe373b5cf0723c05ca711411eee5"],["/dota2wiki/static/media/Mystic_Staff_icon.6f775e92.png","6f775e92d81c9e0f0fcc75fb2153a75f"],["/dota2wiki/static/media/Necronomicon_1_icon.2c9d583d.png","2c9d583dac41a8b91272dcefd9d045a8"],["/dota2wiki/static/media/Null_Talisman_icon.eb226b7b.png","eb226b7b590dceeec3f57860c5e7f49f"],["/dota2wiki/static/media/Nullifier_icon.fb050032.png","fb05003239e1b27c908448eecee93b8b"],["/dota2wiki/static/media/Oblivion_Staff_icon.5ae3d813.png","5ae3d81321020bf2f01fe03ad3d45cec"],["/dota2wiki/static/media/Observer_Ward_icon.cc059231.png","cc0592319a4f0285ae4fca88c4256314"],["/dota2wiki/static/media/Octarine_Core_icon.9a110153.png","9a11015343c1f2098e086f00eb94dc60"],["/dota2wiki/static/media/Ogre_Axe_icon.51161c11.png","51161c119481d1f26406960787bf2303"],["/dota2wiki/static/media/Orb_of_Venom_icon.02d0cdb9.png","02d0cdb9b5d6a281235a2b13664ca2f8"],["/dota2wiki/static/media/Orchid_Malevolence_icon.6addd548.png","6addd548d42156a62114705edfebd1bf"],["/dota2wiki/static/media/Perseverance_icon.f808eb3a.png","f808eb3a0a1c9880de39734e7113d5e3"],["/dota2wiki/static/media/Phase_Boots_icon.38a2613c.png","38a2613cf031347b3fb7ff47a2f2caa2"],["/dota2wiki/static/media/Pipe_of_Insight_icon.3fc8fb0b.png","3fc8fb0b8e1580e910a2d728b43cc15d"],["/dota2wiki/static/media/Platemail_icon.4e2c1fba.png","4e2c1fbabc2c14dfed68c6b8a7b4e45e"],["/dota2wiki/static/media/Point_Booster_icon.79e9bc4f.png","79e9bc4f75e6fae472ff76090e6741ef"],["/dota2wiki/static/media/Power_Treads_icon.54aa5cfe.png","54aa5cfe417c88368555d4594feba1f8"],["/dota2wiki/static/media/Radiance_(Active)_icon.2b326008.png","2b326008a7992b97b2e9e7b3c9eab690"],["/dota2wiki/static/media/Reaver_icon.965edb9f.png","965edb9f8e4dc6ebdaaa9d1ed59ced0b"],["/dota2wiki/static/media/Refresher_Orb_icon.3a9f4a18.png","3a9f4a1881333721ee4f33a0650ab7f6"],["/dota2wiki/static/media/Ring_of_Aquila_(Active)_icon.6453cbd4.png","6453cbd41d143339ff0121eafb84f421"],["/dota2wiki/static/media/Robe_of_the_Magi_icon.d870d565.png","d870d565cf0280c7124262b478ec88be"],["/dota2wiki/static/media/Rod_of_Atos_icon.455d06dd.png","455d06dd001f07fff0962029684075ba"],["/dota2wiki/static/media/Sacred_Relic_icon.bcae04b7.png","bcae04b7706e2e98b03b00731ba1135e"],["/dota2wiki/static/media/Sages_Mask_icon.1d57be0a.png","1d57be0a5d8fa6b7d8acce779de73fd1"],["/dota2wiki/static/media/Sange_and_Yasha_icon.c4b4fd51.png","c4b4fd51b776f79f1d97217222590d83"],["/dota2wiki/static/media/Sange_icon.725b8cdd.png","725b8cdd54f3c5b8a54218dcf74d1be5"],["/dota2wiki/static/media/Satanic_icon.48bec25e.png","48bec25ebe748993d9fff111f7d3f140"],["/dota2wiki/static/media/Scythe_of_Vyse_icon.968b1047.png","968b1047d44d37395d10bf988c221cf8"],["/dota2wiki/static/media/Sentry_Ward_icon.3a4c979c.png","3a4c979c72f6df9e7855b9abf7164421"],["/dota2wiki/static/media/Shadow_Amulet_icon.a1d78073.png","a1d780733b83215dfff94d3c99fd84f1"],["/dota2wiki/static/media/Shadow_Blade_icon.b3fd439a.png","b3fd439a9b55e2793a21236035782ec7"],["/dota2wiki/static/media/Shiva's_Guard_icon.f2bf7c71.png","f2bf7c715af32b4ee711ab06b8eef7b9"],["/dota2wiki/static/media/Silver_Edge_icon.e8a364ed.png","e8a364ed2a6391bcff73ba920a103c7b"],["/dota2wiki/static/media/Skull_Basher_icon.de997ca2.png","de997ca2e7c9073c5b4b46129a9da82e"],["/dota2wiki/static/media/Smoke_of_Deceit_icon.02604716.png","026047164903583e9830053aeb5eebb6"],["/dota2wiki/static/media/Solar_Crest_icon.9154a1da.png","9154a1dacf91a9a065469c0c15741146"],["/dota2wiki/static/media/Soul_Booster_icon.67eec2d5.png","67eec2d5def4d94015d553edcc5ad43f"],["/dota2wiki/static/media/Soul_Ring_icon.ecdc9250.png","ecdc92501f063cd3548c380589924cb8"],["/dota2wiki/static/media/Spirit_Vessel_icon.baec9503.png","baec950327f80f75d64c03a1750ca962"],["/dota2wiki/static/media/Staff_of_Wizardry_icon.469f07c0.png","469f07c0d943ecfdb3833fdcba3854b9"],["/dota2wiki/static/media/Stout_Shield_icon.1a8cc8de.png","1a8cc8de05fa6865ee89832d794bc1ac"],["/dota2wiki/static/media/Talisman_of_Evasion_icon.9f2e86f5.png","9f2e86f5d646c8819403d3cb1b18865c"],["/dota2wiki/static/media/Tango_icon.9eb5e59b.png","9eb5e59bae8855b45bef6cf8a6a8dcf9"],["/dota2wiki/static/media/Tome_of_Knowledge_icon.063aecb4.png","063aecb483019e9be35e58e2e6d657d4"],["/dota2wiki/static/media/Town_Portal_Scroll_icon.cf18222a.png","cf18222a8448a318c9f5065265eb805a"],["/dota2wiki/static/media/Tranquil_Boots_(Active)_icon.46f76787.png","46f767876ab88db8d0730c8b8e1f6866"],["/dota2wiki/static/media/Ultimate_Orb_icon.a3288976.png","a3288976f1f4e2f2cacc94c3d0de5369"],["/dota2wiki/static/media/Urn_of_Shadows_icon.286fc8a9.png","286fc8a9ca9bfa6e415b3f75006b96a7"],["/dota2wiki/static/media/Vanguard_icon.631af52d.png","631af52d5e214691a9c1e75b9fa6968c"],["/dota2wiki/static/media/Veil_of_Discord_icon.92e16295.png","92e162959414ed60d0c6e41124669e16"],["/dota2wiki/static/media/Vitality_Booster_icon.2fb82a2e.png","2fb82a2e4c5c008f809a6501ea83f2e6"],["/dota2wiki/static/media/Vladmir's_Offering_icon.f1770d8d.png","f1770d8df2f25eb41093898e14bbf4d7"],["/dota2wiki/static/media/Void_Stone_icon.def87e73.png","def87e7307efccc0ca2f3c0e70476cbf"],["/dota2wiki/static/media/Wind_Lace_icon.63239271.png","63239271edd8bbf1b877a3b8809e7799"],["/dota2wiki/static/media/Wraith_Band_icon.cd2b351f.png","cd2b351fa7fd7efe2855b5e3a45e40a5"],["/dota2wiki/static/media/Yasha_icon.560dfb45.png","560dfb45fc85ad6c5370e7ec7d36ef0b"],["/dota2wiki/static/media/am.feac51cb.png","feac51cb395e46b3e4cd14af34ccfae3"],["/dota2wiki/static/media/dota2main.5dcc7ad4.png","5dcc7ad4650baec99c6cbe220b238882"],["/dota2wiki/static/media/lich.654f9ead.png","654f9ead0ddde603a7e31c3f51e2a62d"],["/dota2wiki/static/media/minimap.f212e706.png","f212e7066898a675ecf4b3676f812ca6"],["/dota2wiki/static/media/minimap_all.064501a5.png","064501a59ca2af0b48b4fbd605556809"],["/dota2wiki/static/media/pa.5450e982.png","5450e982a621347930f9b0c39396fe5d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var i=new URL(a);return"/"===i.pathname.slice(-1)&&(i.pathname+=e),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,i,c){var t=new URL(a);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(i)),t.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var i=new URL(e).pathname;return a.some(function(a){return i.match(a)})},stripIgnoredUrlParameters=function(a,e){var i=new URL(a);return i.hash="",i.search=i.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),i.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],i=a[1],c=new URL(e,self.location),t=createCacheKey(c,hashParamName,i,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(i){if(!e.has(i)){var c=new Request(i,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+i+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(i,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(i){return Promise.all(i.map(function(i){if(!e.has(i.url))return a.delete(i)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,c),e=urlsToCacheKeys.has(i));var t="/dota2wiki/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL(t,self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(i)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});