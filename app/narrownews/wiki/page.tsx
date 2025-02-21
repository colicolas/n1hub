'use client';
import React, { useState } from "react";
import Link from "next/link";
import PlayerCard from "@/components/PlayerCard";

const players = [
  { name: "Ace", joinDate: "11th May 2023", clan: "T7", description: "Ace is a highly skilled player, known for defeating Kuro and Ricardo in key matches.", medals: [], youtube: "" },
  { name: "Aether", joinDate: "18th December 2023", clan: "AG", description: "Leader of Aegis and former T7 member. Influential in multiple community spaces.", medals: [], youtube: "" },
  { name: "Aftoonimations", joinDate: "13th February 2022", clan: "", description: "Creator of Rodger.", medals: [], youtube: "" },
  { name: "Alphin", joinDate: "26th October 2022", clan: "2S", description: "One of the most active community members. Ranked third in tournament performance.", medals: ["purple2024nominee", "black2024nominee", "100k"], youtube: "" },
  { name: "Ansy", joinDate: "21st February 2022", clan: "", description: "Biggest Narrow One YouTuber with over 8,000 subscribers and 1.8M views. Hosted 2024 World Cup.", medals: ["2024-1red","2024-2red","red2024nominee","verified"], youtube: ["https://www.youtube.com/@Ansy","https://www.youtube.com/@N1eSportsTV"] },
  { name: "Ap11", joinDate: "20th December 2023", clan: "T7", description: "Early member of ACC Pro Community. Later became main editor of OA and grew his channel.", medals: [], youtube: ["https://www.youtube.com/@N1AP11"]},
  { name: "Athena", joinDate: "21st August 2022", clan: "W", description: "Previously active with nearly 50k messages.", medals: [], youtube: "" },
  { name: "Augusto", joinDate: "19th April 2023", clan: "", description: "Uploaded many videos and got verified quickly. Would've likely placed third in the 2023 Narrow One Awards.", medals: [], youtube: ["https://www.youtube.com/@N1_Augusto"] },
  { name: "Aurorablast", joinDate: "2nd April 2023", clan: "", description: "Former YouTuber who made Narrow One Blender videos. Later quit and returned in early 2024 before being banned.", medals: ["50k", "nntop10"], youtube: "" },
  { name: "Aussua", joinDate: "11th April 2022", clan: "SC", description: "Best North American player by far. Very active with 50k messages.", medals: [], youtube: "" },
  { name: "Automagic", joinDate: "2nd March 2024", clan: "", description: "Active in Screenshot Server and UC. Received owner role in Screenshot Server. Does Blender and some coding.", medals: [], youtube: "" },
  { name: "Axe", joinDate: "24th February 2024", clan: "RK", description: "Big RK member, took part in 2S clan war before leaving. Also in T7 and UC.", medals: [], youtube: "" },
  { name: "Blazyst", joinDate: "27th February 2023", clan: "2S", description: "One of 6 2S Warlords and the only one to also be a Pelican Party moderator.", medals: ["2024-3black","purple2024nominee","black2024nominee","red2024nominee","moderator"], youtube: "https://www.youtube.com/@Blazyst-gaming" },
  { name: "Bluey", joinDate: "24th April 2022", clan: "W", description: "Organizer of the first World Cup. Became moderator, hosted events, and created the esports YouTube channel.", medals: ["75k"], youtube: "" },
  { name: "Bowboi", joinDate: "26th October 2022", clan: "SC", description: "Popular YouTuber with 450+ subscribers. Gained recognition after a 1v1 with Snadow.", medals: [], youtube: "https://www.youtube.com/@bowboi" },
  { name: "Bowmaster", joinDate: "6th January 2024", clan: "", description: "Founder and leader of OA. Oversaw merger with ACC Pro Community before quitting after Flame Dynasty failed.", medals: [], youtube: "" },
  { name: "Bye", joinDate: "3rd September 2022", clan: "W", description: "Very active, reaching 40k messages.", medals: [], youtube: "" },
  {"name":"Chaos","joinDate":"28th July 2023","clan":"2S","description":"He plays bow 5 and is one of the best bow 5 mains. Chaos is also quite active having 13k messages in Pelican Party. He was in the mod poll. On YouTube, he amassed over 200 subscribers.","medals":[],"youtube":"https://www.youtube.com/@chaos.narrowone"},
  {"name":"Choco","joinDate":"11th December 2023","clan":"RK","description":"Choco has been the leader of RK ever since Narrow Master stepped down. During this time RK has reached its peak, even being nominated for Clan of the Year 2024.","medals":[],"youtube":""},
  {"name":"Chopper","joinDate":"27th January 2022","clan":"","description":"Chopper was one of the main mods in Ansy community for a very long time. He is the first and only person that ever boosted the screenshots server.","medals":[],"youtube":""},
  {"name":"Chrisch","joinDate":"26th February 2019","clan":"","description":"Chrisch is a long-time friend of Jesper and Jurgen. He moderated the server for one of Jesper’s old games called Splix.io and was also given moderator in Pelican Party in 2024.","medals":["moderator"],"youtube":""},
  {"name":"Chronyx","joinDate":"29th September 2024","clan":"EF","description":"Chronyx was known a bit on Itch before joining. He is one of the few people who still post regular screenshots of their games, somewhat keeping the game alive in that regard.","medals":[],"youtube":""},
  {"name":"Coder","joinDate":"8th February 2023","clan":"T7","description":"Coder is an old T7 member. He was the leader of Team Samurai, who won the CTF Tournament in early 2024.","medals":[],"youtube":""},
  {"name":"Creepyguy","joinDate":"17th April 2023","clan":"2S","description":"Creepy is a very good bow 3 player, probably in the top 10 for bow 3. He's also decently active, almost having 20k messages. He has had quite a lot of success on YouTube with very few posts because of their quality.","medals":[],"youtube":"https://www.youtube.com/@Creepy8Guy"},
  {"name":"Curled fish","joinDate":"24th October 2021","clan":"2S","description":"Curled used to be active in the very early days, then quit and came back later on. To my knowledge, he's the only one that went this path. He's a 2S warlord and has largely influenced the community's humor.","medals":[],"youtube":""},
  {"name":"Deathbringer (aka DB)","joinDate":"28th September 2024","clan":"SC","description":"DB was a founding member of both UC and ACC Pro Community. He's a member of SC and mains M8M6.","medals":[],"youtube":""},
  {"name":"Deathscore (aka DS)","joinDate":"12th December 2023","clan":"UC","description":"Deathscore is a longtime M8M6 main. He’s the founder of Undead Clan and is now leader of UC again after shortly being expelled after a coup.","medals":[],"youtube":""},
  {"name":"Diegotiger","joinDate":"7th May 2024","clan":"EF","description":"Diegotiger has been maining M8M6 for quite a while. He’s the leader of EF.","medals":[],"youtube":"https://www.youtube.com/@n1-diegotiger"},
  {"name":"Diglet","joinDate":"27th September 2023","clan":"T7","description":"Diglet was an important member of T7, even winning the first T7 tournament. He was heavily involved in the part of the community which included Waa and Lightmare and the bunch.","medals":[],"youtube":""},
  {"name":"DJ Dydies","joinDate":"29th November 2023","clan":"FS","description":"DJ Dydies used to have a YouTube channel with 200 subscribers until it got scammed. He was a senior member of OA. He’s the founder of Fossils.","medals":[],"youtube":""},
  {"name":"Doubled D","joinDate":"21st September 2022","clan":"","description":"Doubled is an IRL friend of Sir Dumb and was quite active, reaching 30k messages in Pelican Party. He also holds the record for most non-spam messages in one day.","medals":[],"youtube":""},
  {"name":"Darkfire","joinDate":"15th April 2024","clan":"2S","description":"Darkfire has a shared account called 'Fearless Friends' with Blazyst. He is quite a skilled player, commonly being in the top 20 of tier lists.","medals":["black2024nominee"],"youtube":""},
  {"name":"Ender","joinDate":"27th November 2023","clan":"2S","description":"Ender was one of the most important members of UC. He’s quite active in both the area of the community including Wholesome GC and 2S. Even though he lives in Canada, because of his sleep schedule he will be online at European morning times often.","medals":[],"youtube":""},
  {"name":"Evan","joinDate":"16th March 2023","clan":"","description":"Evan is quite a good player who plays M8M6 a decent amount. He used to be active inconsistently, even leaving Pelican Party at one point, however, now he is a big part of the new generation alongside Whitehairedrabbit among others.","medals":[],"youtube":""},
  {"name":"Farlands (aka Far)","joinDate":"3rd August 2023","clan":"","description":"Farlands is the creator of the Screenshot Server and the owner and most active person in the Wholesome GC. He's also quite talented with Blender, which ended up winning him the art contest and giving him his unique role. He's also very active in general, almost having 50k messages.","medals":["50k"],"youtube":""},
  {"name":"Fatalem","joinDate":"14th March 2023","clan":"","description":"Fatalem was decently big in the community and YouTube. He got to the semis of the 2023 World Cup and only dropped out due to not showing up for the fight. On YouTube, he focused on making interesting and unique videos.","medals":[],"youtube":""},
  {"name":"Feeshy","joinDate":"9th June 2023","clan":"","description":"Feeshy was known for various things such as his Daily Memes series, his trolling towards Kuro, and his suggestions. Many of the popular suggestions were made by him, such as the weapon dye suggestion. However, after he was given the moderator role on his alt account Carl, drama ensued which led to him resigning and quitting.","medals":[],"youtube":""},
  {"name":"Ferocious (aka Fero)","joinDate":"3rd April 2023","clan":"2S","description":"He is arguably the best T7 leader of all time after he grew the clan from about 10 to 40 members. Later on, he joined 2S and is quite active in Pelican Party nowadays.","medals":[],"youtube":""},
  {"name":"Fingolfin","joinDate":"29th October 2023","clan":"T7","description":"Fingolfin is the current T7 leader and one of the best M8M6 mains. His results in M8M6 got him invited to T7, where he quickly rose through the ranks. 2S had a lot of interest in him joining, but he decided to stay with T7.","medals":["t7leader"],"youtube":""},
  {"name":"Flare Solaris","joinDate":"5th December 2022","clan":"","description":"Flare is quite good at doing graphic design. He founded the Schizophreners or TS for short. Flare is quite active too and was even featured in the mod poll.","medals":[],"youtube":""},
  {"name":"Flower","joinDate":"30th June 2023","clan":"2S","description":"She is a very good player and probably the best player who mains using heavy poke instead of light poke. However, she doesn’t do 1v1s.","medals":[],"youtube":""},
  {"name":"Ghepero","joinDate":"23rd December 2023","clan":"69","description":"Ghepero is mostly known for his dispute with Lolopano talking about whether the middle of the Barbados flag is purple or green.","medals":[],"youtube":""},
  {"name":"Graz Lion (aka Lord Graz)","joinDate":"18th September 2022","clan":"","description":"Graz is talented in coding, Blender, and editing. He got third place in the art contest. He hasn’t done too much on YouTube, but one of his videos is a game of Narrow One from a completely different POV, showcasing both his coding and editing skills. He's currently working on a spectate mod.","medals":[],"youtube":""},
  {"name":"Grim Reaper","joinDate":"21st February 2024","clan":"","description":"Grim has never joined a clan but was a moderator in UC and 69. He is also a strong advocate against Bow 1. In his early days, he was heavily recommended to become a moderator.","medals":[],"youtube":""},
  {"name":"Guest 0187 (aka Viola)","joinDate":"12th March 2023","clan":"2S","description":"Guest 0187 is the current owner of both the Ansy Community and the Esports server. Viola is also heavily involved in clans. She is the creator of the 'List of Available Clans,' which was the place where you could find all clans in the past. She hosted a CTF tournament in February/March 2024. She was also appointed as a Moderator in 2024.","medals":["2024-3purple","purple2024nominee","black2024nominee","moderator"],"youtube":"https://www.youtube.com/@incredibleviolent"},
  {"name":"Guest 70","joinDate":"14th January 2024","clan":"SC","description":"Guest 70 is the best mobile player. He’s the leader of the Spirit Clan.","medals":["nntop10"],"youtube":""},
  {"name":"Hashdog","joinDate":"29th September 2023","clan":"2S","description":"Hashdog is mainly known for his involvement in 2S. He even has the grinder role there.","medals":[],"youtube":""},
  {"name":"Hello1","joinDate":"28th February 2023","clan":"","description":"Hello1 is the second-best performing tournament player only behind Snadow. He finished the 2023 World Cup in third and the 2024 World Cup in ninth, going out against this year's third place, Mustard.","medals":[],"youtube":""},
  {"name":"Herrbert","joinDate":"15th December 2022","clan":"W","description":"Arguably the best player to have never won a tournament, Herrbert is the founder of W Squad, which is either the second or third-best clan of all time. He was also the person that got closest to knocking Kuro out in the 2023 World Cup, getting 9 kills in a 1v1 to 10 kills. He suggested the ISO emoji in the Pelican Party Discord.","medals":["nntop10"],"youtube":""},
  {"name":"Hituwiththepan (aka Pan)","joinDate":"23rd February 2024","clan":"69","description":"Pan’s introduction to the community was through the short-lived Flame Dynasty project. He then went on to become a big figure in M8M6 and UC and is nowadays very active in the side of the community which involves Wholesome GC.","medals":[],"youtube":""},
  {"name":"Hotdogman (aka Hdm)","joinDate":"27th May 2019","clan":"X","description":"He is commonly referred to as the oldest person that's still active in the community aside from the developers. Hdm was the first mod after the server gained lots of popularity in early 2022. Since then, he has been one of the main event organizers, most recently having done the art and soundboard contest. He’s also the director of the Narrow One movie. He is the oldest person currently in the community.","medals":["2024-2purple","purple2024nominee","moderator"],"youtube":"https://www.youtube.com/@Hot-dog-man-off"},
  {"name":"Howl","joinDate":"30th January 2022","clan":"","description":"Howl was one of the most toxic members the community has ever seen, having beef with essentially everyone. She was one of the most active people for a long time; however, she was banned for sending NSFW. On the 30th of January 2025, Howl was unbanned after Farlands asked Jesper as a joke.","medals":["100k"],"youtube":""},
  {"name":"Hunter","joinDate":"3rd August 2023","clan":"2S","description":"Hunter is one of the few people that are subscribed to the Pelican Party Patreon. She used to be a long-time T7 member but is now a 2S member. She took part in 10 Players 1 Account.","medals":[],"youtube":""},
  {"name":"Infurness (aka B2DK)","joinDate":"22nd July 2022","clan":"2S","description":"Longevity in the community, 700 YouTube subs, 180k+ messages, 2sguessr event leader, 2S warlord, General+ creator.","medals":["purple2024nominee","black2024nominee","nntop10","100k","monthmost","monthmost","monthmost"],"youtube":""},
  {"name":"Intdgy","joinDate":"7th July 2024","clan":"CN","description":"Gained prominence in Feb 2025 for releasing a public mod with observer mode and other features.","medals":[],"youtube":""},
  {"name":"Jigsaw","joinDate":"20th July 2022","clan":"","description":"Infamous for ruining Snadow’s server, was active with 33k+ messages, contributed to early tierlists.","medals":[],"youtube":""},
  {"name":"Joker","joinDate":"8th June 2023","clan":"","description":"Biggest YouTuber without a checkmark, best known for a collection of Narrow One memes.","medals":["red2024nominee"],"youtube":"https://www.youtube.com/@TheN1Joker_NarrowOne"},
  {"name":"Joris","joinDate":"21st July 2022","clan":"","description":"Patreon subscriber, mod with <2k messages, came up with the idea for geoguessr, longtime friend of Jesper.","medals":["moderator"],"youtube":""},
  {"name":"Kaijin","joinDate":"4th September 2023","clan":"T7","description":"Founder of T7, first to reach 1 million coins on a solo account.","medals":[],"youtube":""},
  {"name":"Kdb","joinDate":"7th November 2023","clan":"CP","description":"One of the oldest and most important members of Crow Party, active in Pelican Party memes channel.","medals":[],"youtube":""},
  {"name":"Kerriel","joinDate":"15th April 2022","clan":"","description":"Top 10 bow 1 player, uses a rabbit head skin, plays M8M6 extensively.","medals":[],"youtube":""},
  {"name":"Kiju","joinDate":"1st September 2022","clan":"2S","description":"Verified YouTuber, one of the best German players.","medals":["verified"],"youtube":""},
  {"name":"Kitsune","joinDate":"8th June 2022","clan":"W","description":"Greatest Swiss player, highly active, focused on Ansy community after Howl was banned.","medals":["50k"],"youtube":""},
  {"name":"Kitten","joinDate":"29th July 2023","clan":"T7","description":"Senior T7 member, won the T7 tournament, 340+ YouTube subscribers.","medals":["red2024nominee"],"youtube":"https://www.youtube.com/@kittennarrowone"},
  {"name":"King NJ","joinDate":"11th March 2024","clan":"","description":"Renamed the Hindi channel in Pelican Party, quit and returned after a 100-reaction discussion post.","medals":[],"youtube":""},
  {"name":"Kuro","joinDate":"19th March 2022","clan":"2S","description":"Had the best prime in Narrow One, Twitch streamer, YouTuber with tier lists and guides, 2023 Summer Tournament winner, creator and leader of 2 Shots, skilled coder but later created hacks after a dispute with Jesper.","medals":["2023-1","nntop10"],"youtube":"https://www.youtube.com/@kurokur0kurO"},
  {"name":"Kushagra (aka Kush)","joinDate":"23rd August 2023","clan":"T7","description":"T7 leader during mid-2024, involved in Fossils.","medals":[],"youtube":""},
  {"name":"Léonard","joinDate":"9th February 2022","clan":"W","description":"One of the best early players, reached the third round in the first world cup before losing to Platon. Has about 7k messages. French.","medals":[],"youtube":""},
  {"name":"Lichtel","joinDate":"21st December 2023","clan":"T7","description":"Top T7 tournament player, won archery Olympics, placed second in T7 tournament behind Kitten. Led Undead clan and got it officialized in esports.","medals":[],"youtube":""},
  {"name":"Lightmare","joinDate":"26th October 2023","clan":"2S","description":"Started as a core T7 member in 2024, now in 2S. Founder of wholesome gc. Waa’s brother.","medals":[],"youtube":""},
  {"name":"Limits","joinDate":"29th January 2023","clan":"","description":"Started on itch, moved to Discord, joined 2S invited by Kuro. Trained in bow 6 by Snadow. Exposed 2S for exploiting in March.","medals":[],"youtube":""},
  {"name":"Liya","joinDate":"11th November 2022","clan":"69","description":"Highly active with 7k+ messages in November 2024. Journalist, major part of wholesome gc and 2S community. Screenshots library owner. Alphin’s sister.","medals":["monthperson","monthmost"],"youtube":""},
  {"name":"Lolopano (aka Lolo)","joinDate":"25th May 2023","clan":"69","description":"Founder of Narrow News (news, data, awards, hall of fame, wiki). Key figure in the mod poll. Led/administered 4 officialized clans. Co-founder of wholesome gc. Screenshots library owner. Part of 10 players 1 account.","medals":["2024-1purple","purple2024nominee","75k","69leader","monthperson","monthperson","monthperson","monthperson","monthmost","monthmost","monthmost"],"youtube":"https://www.youtube.com/@lolopano"},
  {"name":"Mindrot (aka Mind)","joinDate":"22nd September 2023","clan":"2S","description":"Started playing M8M6, later joined T7 and participated in the clan war against 2S. Impressed and joined 2S, becoming one of the top 25 players of all time. Hosted 2SLeague before disappearing.","medals":[],"youtube":""},
  {"name":"Mridul","joinDate":"4th October 2022","clan":"T7","description":"First YouTuber from India to receive a checkmark. Has around 44,000 views with a high view-to-sub ratio.","medals":["verified"],"youtube":"https://www.youtube.com/@n1mridulk"},
  {"name":"Mustard","joinDate":"27th December 2023","clan":"2S","description":"Skilled player who reached the 2024 world cup semifinals, narrowly losing to Snadow 15-13. Attempted agm in early 2024, leading to the 2S account being banned for the first time.","medals":["black2024nominee"],"youtube":""},
  {"name":"Mustard Gas","joinDate":"17th June 2024","clan":"69","description":"Not to be confused with Mustard. Formerly very active in the esports server, participated in multiple platinum/gold cups.","medals":[],"youtube":""},
  {"name":"Naju","joinDate":"7th January 2023","clan":"2S","description":"Second most subscribed Narrow One YouTuber, though most of his subs are from non-N1 content. Reached the 2024 world cup final and led 16-13 before losing.","medals":["2024-2silver","nntop10","2024-2black","black2024nominee","red2024nominee"],"youtube":"https://www.youtube.com/@narrowone-naju"},
  {"name":"Naomie","joinDate":"13th February 2024","clan":"69","description":"Active community member with around 10k messages across accounts. Previous account was scammed, requiring a new one.","medals":[],"youtube":""},
  {"name":"Nerdcast (aka Nerd)","joinDate":"12th February 2022","clan":"AG","description":"Formerly active with over 13k messages. Important figure in AG, OA, and T7. Used to livestream frequently.","medals":[],"youtube":"https://www.youtube.com/@Nerdcășt_1999"},
  {"name":"Nig","joinDate":"8th June 2023","clan":"2S","description":"Reached the semifinals of the 2024 world cup and was nominated for the 2024 awards. Active in the group of players that started playing Rivals around Silvester.","medals":["black2024nominee"],"youtube":""},
  {"name":"Osiahmelon","joinDate":"4th November 2023","clan":"","description":"Participated in the CTF tourney.","medals":[],"youtube":""},
  {"name":"Ping 18","joinDate":"6th January 2024","clan":"","description":"Started as an M8M6 main, became one of the first members of ACC Pro Community, later joined OA through a merger. Became more active in Ansy Community and later in Pelican Party and 2S.","medals":["twitch"],"youtube":""},
  {"name":"Pixel Junkie","joinDate":"30th January 2024","clan":"","description":"Gained notoriety for frequent Twitch streaming. Nominated for YouTuber and Person of the Year in 2024.","medals":["purple2024nominee","red2024nominee", "twitch"],"youtube":""},
  {"name":"Platon","joinDate":"11th November 2022","clan":"W","description":"Second player ever considered the greatest of all time. Won the first world cup less than three weeks after joining. Once the best player, now considered around 5th best of all time due to updates and rising skill levels. Vital member of W Squad.","medals":["2022-1","nntop10"],"youtube":""},
  {"name":"Pratik","joinDate":"24th April 2022","clan":"","description":"Former T7 leader. Skilled coder who made public scripts, Blender creations, and tutorials. Coded the T7 bot.","medals":[],"youtube":""},
  {"name":"Potato Peeler (aka Spud)","joinDate":"24th July 2024","clan":"","description":"Highly active in the 2S community. Whitehairedrabbit knows his address. Strongly dedicated to Bow 1 hate.","medals":["twitch"],"youtube":""},
  {"name":"Qoo","joinDate":"25th February 2022","clan":"","description":"Older player with 1,350 YouTube subscribers. Member of the Alliance YouTube channel. Currently serving mandatory military service but expected to return. Has a significant legacy, including a fan club, a suggested Qoo hat, and a Qoo day.","medals":["verified"],"youtube":"https://www.youtube.com/@qoo1"},
  {"name":"Razgriz (aka Raz)","joinDate":"10th April 2023","clan":"2S","description":"Talented coder who created scripts for generating custom codes. Strong player frequently ranked in the top 15 or even top 10 of tier lists.","medals":["black2024nominee"],"youtube":""},
  {"name":"Ricardo (aka Ricky)","joinDate":"30th March 2022","clan":"","description":"One of only two players to reach a world cup final without winning a tournament. The only player that T7 and 2S had a dispute over. In his prime, he was the second-best player, though overshadowed by Kuro.","medals":["2023-2","nntop10"],"youtube":""},
  {"name":"Ruthless (aka Ruth)","joinDate":"9th September 2022","clan":"X","description":"Highly skilled player, often ranked in the top 20 or even top 10 of tier lists. Holds a high position in X Clan. Nominated for Player of the Year in the first Narrow One Awards.","medals":["nntop10"],"youtube":""},
  {"name":"Sacred Ember","joinDate":"7th August 2023","clan":"","description":"Player from Australia who was a core member of T7. Decently active with over 8k messages in Pelican Party.","medals":[],"youtube":""},
  {"name":"Sammie","joinDate":"16th March 2023","clan":"","description":"Active user with over 30k messages in Pelican Party and active in Ansy Community. Part of the mod poll and a community representative in discussions.","medals":[],"youtube":""},
  {"name":"Scrap (aka Wattle)","joinDate":"18th October 2024","clan":"SC","description":"Big M8M6 community member and part of the new generation. Also known as Wattle.","medals":[],"youtube":""},
  {"name":"Sharp","joinDate":"23rd September 2024","clan":"","description":"One of the best trickshotters with a visually appealing playstyle. Expected to be a top 10 player in 2025.","medals":[],"youtube":"https://www.youtube.com/@N1-Sharp"},
  {"name":"Shoe Emperor","joinDate":"25th March 2023","clan":"2S","description":"Talented coder who developed a verification mark script and replay mod for Narrow One. Started in OA but is now a grinder in 2S.","medals":["purple2024nominee"],"youtube":""},
  {"name":"Sike","joinDate":"27th July 2023","clan":"","description":"Winner of the 2023 Halloween Art Contest.","medals":[],"youtube":""},
  {"name":"Sir Dumb (aka Sd)","joinDate":"20th September 2022","clan":"W","description":"Formerly the most active person in the community before being surpassed by Infurness. Voted as a moderator and played a key role in the addition of the ISO sticker. Important member of W.","medals":["100k","moderator"],"youtube":""},
  {"name":"SkullIslandKing (aka SIK)","joinDate":"19th January 2025","clan":"69","description":"Beat Zayfox, Alphin, and Chronyx on his first day. On his second day, defeated both Snadow and Naju, drawing comparisons to Platon.","medals":[],"youtube":""},
  {"name":"Skyzess","joinDate":"28th October 2023","clan":"","description":"Very skilled player frequently ranked in the top 20 in tier lists. Had success on YouTube and was nominated for YouTuber of the Year in the first Narrow One Awards.","medals":[],"youtube":"https://www.youtube.com/@skyzess90"},
  {"name":"Sleekycat (aka Sleeky)","joinDate":"9th December 2023","clan":"2S","description":"2S member and Pelican Party moderator, one of only three people to hold both roles. Became a moderator through the mod poll but was exposed in December 2024 for misconduct.","medals":["50k"],"youtube":""},
  {"name":"Snadow","joinDate":"14th May 2022","clan":"2S","description":"Major impact on the Narrow One YouTube scene with 1,860 subs on his main channel and 495 on his second. Has over 40k messages in Pelican Party and leads 2 Shots. Won this year's tournament after a comeback from 16-13.","medals":["2024-1gold","2022-2","nntop10","2024-1black","purple2024nominee","black2024nominee","red2024nominee","red2024nominee","2sleader","50k"],"youtube":["https://www.youtube.com/@snadowblackmill","https://www.youtube.com/@n1gameplays"]},
  {"name":"Sop (aka Jack)","joinDate":"19th August 2022","clan":"2S","description":"Highly skilled player mostly active from 2022-2023. Frequently ranked in the top 20 of all-time player rankings. Was banned from Pelican Party.","medals":[],"youtube":""},
  {"name":"Spectral (aka Majoras)","joinDate":"20th May 2022","clan":"X","description":"Part of the '10 Players 1 Account' project. Leader of X.","medals":["xleader"],"youtube":""},
  {"name":"Starfall","joinDate":"19th November 2022","clan":"2S","description":"Successful YouTuber with over 870 subscribers. Senior 2S member and skilled player. Active in the community with almost 40k messages.","medals":[],"youtube":"https://www.youtube.com/@Starfall-Horizon"},
  {"name":"Tkpvn","joinDate":"15th July 2022","clan":"T7","description":"Youngest community member, now 11, joined at age 8. Best Vietnamese player and a major member of CP and T7.","medals":[],"youtube":"https://www.youtube.com/@tkpvn9535"},
  {"name":"Truck","joinDate":"28th May 2024","clan":"","description":"Only person on the list who doesn’t play Narrow One. Joined the community through a random userphone connection in 2S, later joining Pelican Party and Wholesome GC.","medals":[],"youtube":""},
  {"name":"Uchiha","joinDate":"6th April 2022","clan":"","description":"Played a ton of M8M6.","medals":[],"youtube":""},
  {"name":"Violette Diana","joinDate":"2nd August 2023","clan":"DG","description":"Founder of Wholesome GC and DG. Influential in RK and AG. Used to be very active with 28k messages.","medals":[],"youtube":""},
  {"name":"Waa","joinDate":"14th December 2023","clan":"2S","description":"Core T7 member in early 2024. Founder of the Bow 1 server and one of the top 10 Bow 1 users of all time. Lightmare’s brother.","medals":[],"youtube":""},
  {"name":"Whitehairedrabbit (aka Rabbit)","joinDate":"16th April 2024","clan":"X","description":"Became active recently and is part of the new generation in Narrow One. Knows Evan in real life.","medals":[],"youtube":""},
  {"name":"Wolfe","joinDate":"8th April 2022","clan":"W","description":"Highly requested moderator, accepted the role despite initial reluctance. One of the most active members, having the fifth most messages of all time. Referee in the 2022 World Cup.","medals":["purple2024nominee","75k","moderator"],"youtube":""},
  {"name":"Xeltalliv","joinDate":"12th May 2023","clan":"2S","description":"2S warlord and talented coder. Discovered a matchmaking bug and reported it to Jesper. Created a replay mod and spectate mod. Dedicated to improving 1v1 skills, reaching a 19-day streak. Highly active in bug reports and suggestions.","medals":[],"youtube":""},
  {"name":"Yeemi","joinDate":"1st June 2023","clan":"","description":"Talented coder who developed Betrona client, the best public client as of its last update in January 2024.","medals":[],"youtube":""},
  {"name":"Zayfox (aka Zay)","joinDate":"6th January 2024","clan":"","description":"Founder of ACC Pro Community. Former T7 member, now dislikes T7 after being repeatedly kicked. Previously disliked 2S while in T7. Biggest win was defeating Snadow after multiple losses.","medals":[],"youtube":""},
  {"name":"Zix","joinDate":"21st January 2022","clan":"","description":"Creator of Garry, the main character of the Narrow One movie.","medals":[],"youtube":""}
];

// Generate unique first letters for filtering
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function WikiPage() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");

  // Filter players based on search and selected letter
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = selectedLetter === "All" || player.name[0].toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title & Description */}
      <div className="text-center mt-16">
        <h1 className="text-6xl latofont text-white tracking-tight">Narrow One Wiki</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          The official Narrow One Wiki, a project by Narrow News, documenting players and key contributors in the community. 
          View the full wiki document{" "}
          <Link
            href="https://docs.google.com/document/d/1UiXgxmanxPuXbp-4hS3yr2c5268HCs5tZlsCtE46Hso/edit?tab=t.0"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            here.
          </Link>

          {" "}The award descriptions can be found <Link href="https://docs.google.com/document/d/1CERYzWJn_xjxzv4BALvQo_e-5B2IcuOCZSfgrpt2-sU/edit?tab=t.0" target="_blank" className="text-blue-400 hover:underline">here.</Link>
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search for a player..."
          className="w-full p-3 text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap justify-center mt-4 space-x-2">
        <button
          className={`px-3 py-1 rounded-md ${selectedLetter === "All" ? "bg-blue-500" : "bg-gray-700"}`}
          onClick={() => setSelectedLetter("All")}
        >
          All
        </button>
        {alphabet.map(letter => (
          <button
            key={letter}
            className={`px-3 py-1 rounded-md ${selectedLetter === letter ? "bg-blue-500" : "bg-gray-700"}`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Player Cards */}
      <div className="mt-8 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(player => (
            <PlayerCard
              key={player.name}
              name={player.name}
              joinDate={player.joinDate}
              clan={player.clan}
              medals={player.medals}
              description={player.description}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No players found.</p>
        )}
      </div>

      <br /><br /><br />
    </main>
  );
}
