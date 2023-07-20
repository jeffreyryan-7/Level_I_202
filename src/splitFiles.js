import PDF1 from  './Level_1_Year_2_Split_PDFs/1_Year_2_Snare_Survey.pdf';
import PDF2 from  './Level_1_Year_2_Split_PDFs/2_Breuer.pdf';
import PDF3 from  './Level_1_Year_2_Split_PDFs/3_Grooving_Flams.pdf';
import PDF4 from  './Level_1_Year_2_Split_PDFs/4_Payson_Flams.pdf';
import PDF5 from  './Level_1_Year_2_Split_PDFs/5_Wooten_Flams_i.pdf';
import PDF6 from  './Level_1_Year_2_Split_PDFs/6_A_Fine_Time.pdf';
import PDF7 from  './Level_1_Year_2_Split_PDFs/7_German_Etudes_i.pdf';
import PDF8 from  './Level_1_Year_2_Split_PDFs/8_Dorn_i.pdf';
import PDF9 from  './Level_1_Year_2_Split_PDFs/9_Wooten_Flams_ii.pdf';
import PDF10 from  './Level_1_Year_2_Split_PDFs/10_Wrist_Twisters_i.pdf';
import PDF11 from  './Level_1_Year_2_Split_PDFs/11_Dorn_ii.pdf';
import PDF12 from  './Level_1_Year_2_Split_PDFs/12_Handwritten_Rudiments.pdf';
import PDF13 from  './Level_1_Year_2_Split_PDFs/13_Delecluse_Flams.pdf';
import PDF14 from  './Level_1_Year_2_Split_PDFs/14_Wooten_Flams_iii.pdf';
import PDF15 from  './Level_1_Year_2_Split_PDFs/15_Wrist_Twisters_ii.pdf';
import PDF16 from  './Level_1_Year_2_Split_PDFs/16_Alliteration.pdf';
import PDF17 from  './Level_1_Year_2_Split_PDFs/17_La_Dame_De_Pique.pdf';
import PDF18 from  './Level_1_Year_2_Split_PDFs/18_Dorn_iii.pdf';
import PDF19 from  './Level_1_Year_2_Split_PDFs/19_Hurricane_Karen.pdf';
import PDF20 from  './Level_1_Year_2_Split_PDFs/20_Have_You_Met_Mr_Green.pdf';
import PDF21 from  './Level_1_Year_2_Split_PDFs/21_Dorn_iv.pdf';
import PDF22 from  './Level_1_Year_2_Split_PDFs/22_Hybrid_Rudiments.pdf';
import PDF23 from  './Level_1_Year_2_Split_PDFs/23_Wooten_Flams_iv.pdf';
import PDF24 from  './Level_1_Year_2_Split_PDFs/24_Payson_Drags.pdf';
import PDF25 from  './Level_1_Year_2_Split_PDFs/25_Delecluse_Drags.pdf';
import PDF26 from  './Level_1_Year_2_Split_PDFs/26_German_Etudes_ii.pdf';
import PDF27 from  './Level_1_Year_2_Split_PDFs/27_Wrist_Twisters_iii.pdf';
import PDF28 from  './Level_1_Year_2_Split_PDFs/28_Anderson_Studies.pdf';
import PDF29 from  './Level_1_Year_2_Split_PDFs/29_Payson_Four_Strokes.pdf';
import PDF30 from  './Level_1_Year_2_Split_PDFs/30_Delecluse_Mixed_Ornaments.pdf';
import PDF31 from  './Level_1_Year_2_Split_PDFs/31_German_Etudes_iii.pdf';
import PDF32 from  './Level_1_Year_2_Split_PDFs/32_Les_Noces.pdf';
import PDF33 from  './Level_1_Year_2_Split_PDFs/33_Macarez_Etudes_i.pdf';
import PDF34 from  './Level_1_Year_2_Split_PDFs/34_Exerpts.pdf';
import PDF35 from  './Level_1_Year_2_Split_PDFs/35_Payson_Rolls.pdf';
import PDF36 from  './Level_1_Year_2_Split_PDFs/36_Delecluse_Rolls.pdf';
import PDF37 from  './Level_1_Year_2_Split_PDFs/37_Macarez_Etudes_ii.pdf';

const splitFiles = [
    {title: 'Year 2 Snare Survey', pdf: PDF1, session: 1, notes: 'A condensed overview of the most difficult sections of the year 1 snare survey. Pay special attention to late Wilcoxon, Stick control flams, and Aaccents and Rebounds p.21 and p.40-47.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 1,  id:'1'},
    {title: 'Breuer', pdf: PDF2, session: 1, notes: 'Focus on exercises 1, 3, 7, 8, 9, 11, 16, 17, 22b, 26, 32, 33, and pages that come after.', snare: 0, xylo: 1, breuer: 1, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'2'},
    {title: 'Grooving Flams', pdf: PDF3, session: 1, notes: 'Make the accents PHAT and flams TIGHT.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'3'},
    {title: 'Payson Flams',  pdf: PDF4, session: 1, notes: 'Similar vibe to Delecluse, light touch, consistent color.', snare: 1, xylo: 0, breuer: 0, payson: 1, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'4'},
    {title: 'Wooten Flams i',  pdf: PDF5, session: 1, notes: 'Damn ma\'am, Sam\'s clam swam... Wham! Jam ram tam am spam ham. Scram, tram!!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 1, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'5'},
    {title: 'A Fine Time',  pdf: PDF6, session: 1, notes: 'This one is no joke. Focus on clean sounds over speed, especially when phrasing doubles. Alternate practicing this with Alliteration and practice without doubles and flams!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 1, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'6'},
    {title: 'German Etudes i',  pdf: PDF7, session: 1, notes: 'There are your style studies! Play them on the drum with snares on. Focus on consistency of flams, while keeping the march and waltz characters firm.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 1, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'7'},
    {title: 'Dorn i',  pdf: PDF8, session: 2, notes: 'Hit everything, but focus on: 11, 12, 13, 14, p.17.1, p.17.2, p.18.1, p.19.2, p.20.4. *Note: p.18-20 are played as octaves*.', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 1, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'8'},
    {title: 'Wooten Flams ii',  pdf: PDF9, session: 2, notes: 'Everyone knows jam on toast, but did you know that jam is made by removing the flams from Bluecoats warmups?', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 1, tompkins: 0, german: 0, dorn: 0, bailey: 1, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'9'},
    {title: 'Wrist Twisters i',  pdf: PDF10, session: 2, notes: 'These are tricky, don\'t loose heart! Try singing these lines first to get the phrasing down, the practice them (very) slow -> fast -> slow.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 1, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'10'},
    {title: 'Dorn ii',  pdf: PDF11, session: 3, notes: 'Hit everything, but focus on p.27.4, p.28.7 (missing it\'s label), p.29.8-9a, p.30-32', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 1, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 1,  id:'11'},
    {title: 'Handwritten Rudiments',  pdf: PDF12, session: 3, notes: 'Useful for remedying problems in the Tompkins', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'12'},
    {title: 'Delecluse Flams',  pdf: PDF13, session: 3, notes: 'He\'s back! One of the biggest challenges of year ii is keeping the volume AND color of the main note independent of whether it has a grace note. Begin!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 1, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'13'},
    {title: 'Wooten Flams iii',  pdf: PDF14, session: 3, notes: 'Flams were invented by Fin Ishterflam. While having dessert, he dropped two spoons which hit the ground slightly offset. He had only taken a few bites of his flan, so its cross section had went form n to M. Hence, flam.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 1, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'14'},
    {title: 'Wrist Twisters ii',  pdf: PDF15, session: 3, notes: 'You\'ve got this! They could call any of these in the technical, but they\'ll give you a second to remember how they feel, be ready.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 1, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'15'},
    {title: 'Alliteration',  pdf: PDF16, session: 3, notes: 'Transitions transitions transitions. Practice with a met to keep your quarter notes honest when you change subdivisions.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 1, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'16'},
    {title: 'La Dame De Pique',  pdf: PDF17, session: 3, notes: 'Play the solo starting 4 before C. experiment with different stickings to pass through the rolls and flams. Know the tune!! Sing the tune!!! Match the character of the tune!!!!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'17'},
    {title: 'Dorn iii',  pdf: PDF18, session: 4, notes: 'Focus on the Syncopation pages and the p.40.4&5. Do a few passes over p.42-43.', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 1, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'18'},
    {title: 'Hurricane Karen',  pdf: PDF19, session: 4, notes: 'Have fun with this one! Give it a zany, slapstick character.', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 1,  id:'19'},
    {title: 'Have You Met Mr Green?',  pdf: PDF20, session: 4, notes: 'THIS ONE IS JUST FOR MEMES. DON\'T WORK ON IT UNLESS YOU HAVE AN ABUNDANCE OF TIME.', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'20'},
    {title: 'Dorn iv',  pdf: PDF21, session: 4, notes: 'Note bloat time. Spare yourself and focus on the first one!', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 1, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'21'},
    {title: 'Hybrid Rudiments',  pdf: PDF22, session: 4, notes: 'Bonus points: see if you\'re truly fluent in drumline-ese by vocalizing all of these.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 0,  id:'22'},
    {title: 'Wooten Flams iv', pdf: PDF23, session: 4, notes: 'function setMainNote(theMainNote){setMainNote(theMainNote);}', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 1, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 0, fourStrokes: 0,  id:'23'},
    {title: 'Payson Drags', pdf: PDF24, session: 4, notes: 'Why all these seconds notes of the doubles? Here it is!', snare: 1, xylo: 0, breuer: 0, payson: 1, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 1, fourStrokes: 0,  id:'24'},
    {title: 'Delecluse Drags', pdf: PDF25, session: 4, notes: 'To develop clean, crispy ruffs, play the game of gradually compressing the closer and closer to the main note.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 1, anderson: 0, macarez: 0, flams: 0, ruffs: 1, fourStrokes: 0,  id:'25'},
    {title: 'German Etudes ii', pdf: PDF26, session: 4, notes: 'Enjoy the techniques you\'ve been honing in some musical phrases.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 1, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 0,  id:'26'},
    {title: 'Wrist Twisters iii', pdf: PDF27, session: 4, notes: 'Last one, we promise! Slow fast slow is a game changer here. Be patient and diligent. You\'re almost done!!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 1, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 0,  id:'27'},
    {title: 'Anderson Studies', pdf: PDF28, session: 5, notes: 'Focus almost entirely on #2 and #5. Do long, connected phrases in #2 and balancing voicing in #5.', snare: 0, xylo: 1, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 1, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'28'},
    {title: 'Payson Four Strokes', pdf: PDF29, session: 6, notes: 'Same as earlier, keep character and main note emphasis regardless of the number of grace notes.', snare: 1, xylo: 0, breuer: 0, payson: 1, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 1,  id:'29'},
    {title: 'Delecluse Mixed Ornaments', pdf: PDF30, session: 6, notes: 'The revision exercises are bitter medicine, but extremely beneficial. Once they\'re in your hands, center your attention on executing transitions .', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 1, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 1,  id:'30'},
    {title: 'German Etudes iii', pdf: PDF31, session: 6, notes: 'A few more style studies.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 1, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 1,  id:'31'},
    {title: 'Les Noces', pdf: PDF32, session: 6, notes: 'Don\'t dedicate a ton of time, but try playing with the piece a few times. It\'s a cool one', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 1, fourStrokes: 1,  id:'32'},
    {title: 'Macarez Etudes i', pdf: PDF33, session: 6, notes: 'Look for all the-not so-hidden excerpt quotes.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 1, flams: 1, ruffs: 1, fourStrokes: 1,  id:'33'},
    {title: 'Exerpts', pdf: PDF34, session: 6, notes: 'Look at you go! Now you have the tools to execute these!!', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 1, ruffs: 1, fourStrokes: 1,  id:'34'},
    {title: 'Payson Rolls', pdf: PDF35, session: 6, notes: 'How many buzzes per duration? How many buzzes per dynamic??', snare: 1, xylo: 0, breuer: 0, payson: 1, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'35'},
    {title: 'Delecluse Rolls', pdf: PDF36, session: 6, notes: 'How do rolls start and end? Think like a vocalist; what consonants start your rolls? What vowels sustain them?', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 1, anderson: 0, macarez: 0, flams: 0, ruffs: 0, fourStrokes: 0,  id:'36'},
    {title: 'Macarez Etudes ii', pdf: PDF37, session: 6, notes: 'Here\'s where you really start \"passing through the details\". You\'ve put in the work. Now let your technical structure do it\'s thing.', snare: 1, xylo: 0, breuer: 0, payson: 0, wooten: 0, tompkins: 0, german: 0, dorn: 0, bailey: 0, delecluse: 0, anderson: 0, macarez: 1, flams: 1, ruffs: 1, fourStrokes: 1,  id:'37'},
];

export default splitFiles;