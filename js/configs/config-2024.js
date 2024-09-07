const canvasSize = {
	x: 700,
	y: 700
}
window.canvasSize = canvasSize

const canvasCenter = {
	x: canvasSize.x/2,
	y: canvasSize.y/2
}
window.canvasCenter = canvasCenter

let variationsConfig = {"zevent2024":{"name":"ZEvent2024 Place","code":"","default":222,"drawablePeriods":[0,222],"expansions":[],"versions":[{"timestamp":1725639000,"url":["./img/canvas/default/1662737400.png"]},{"timestamp":1725636839,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637139,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637439,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637739,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638039,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638339,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638639,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638939,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725639239,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725639539,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725639538467.png"]},{"timestamp":1725639839,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725639838277.png"]},{"timestamp":1725640139,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640138304.png"]},{"timestamp":1725640440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640438548.png"]},{"timestamp":1725640740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640738659.png"]},{"timestamp":1725641040,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641038379.png"]},{"timestamp":1725641340,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641338447.png"]},{"timestamp":1725641640,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641638524.png"]},{"timestamp":1725641940,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641938823.png"]},{"timestamp":1725642240,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642238604.png"]},{"timestamp":1725642540,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642539140.png"]},{"timestamp":1725642840,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642838619.png"]},{"timestamp":1725643140,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643138712.png"]},{"timestamp":1725643440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643438524.png"]},{"timestamp":1725643740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643738809.png"]},{"timestamp":1725644040,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644038913.png"]},{"timestamp":1725644340,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644338522.png"]},{"timestamp":1725644640,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644639176.png"]},{"timestamp":1725644940,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644938746.png"]},{"timestamp":1725645240,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645239115.png"]},{"timestamp":1725645540,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645539230.png"]},{"timestamp":1725645840,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645839094.png"]},{"timestamp":1725646140,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646138785.png"]},{"timestamp":1725646440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646438987.png"]},{"timestamp":1725646740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646739223.png"]},{"timestamp":1725647041,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647039688.png"]},{"timestamp":1725647341,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647339815.png"]},{"timestamp":1725647641,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647639859.png"]},{"timestamp":1725647941,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647939728.png"]},{"timestamp":1725648241,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648239899.png"]},{"timestamp":1725648541,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648539945.png"]},{"timestamp":1725648841,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648839777.png"]},{"timestamp":1725649141,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649139578.png"]},{"timestamp":1725649441,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649439535.png"]},{"timestamp":1725649741,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649739780.png"]},{"timestamp":1725650041,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649937142.png"]},{"timestamp":1725650341,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650339403.png"]},{"timestamp":1725650641,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650639888.png"]},{"timestamp":1725650941,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650940341.png"]},{"timestamp":1725651241,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651239369.png"]},{"timestamp":1725651541,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651540162.png"]},{"timestamp":1725651841,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651840268.png"]},{"timestamp":1725652141,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652140546.png"]},{"timestamp":1725652441,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652440508.png"]},{"timestamp":1725652741,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652740088.png"]},{"timestamp":1725653042,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653040553.png"]},{"timestamp":1725653342,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653339698.png"]},{"timestamp":1725653642,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653638557.png"]},{"timestamp":1725653942,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653930135.png"]},{"timestamp":1725654242,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654239346.png"]},{"timestamp":1725654542,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654539390.png"]},{"timestamp":1725654842,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654840635.png"]},{"timestamp":1725655142,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655140219.png"]},{"timestamp":1725655442,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655440788.png"]},{"timestamp":1725655742,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655728808.png"]},{"timestamp":1725656042,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656040791.png"]},{"timestamp":1725656342,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656340577.png"]},{"timestamp":1725656642,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656640801.png"]},{"timestamp":1725656942,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656846590.png"]},{"timestamp":1725657242,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657238072.png"]},{"timestamp":1725657542,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657539458.png"]},{"timestamp":1725657842,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657841227.png"]},{"timestamp":1725658142,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725658140834.png"]},{"timestamp":1725658442,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725658441286.png"]},{"timestamp":1725658742,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725658740511.png"]},{"timestamp":1725659043,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725659040006.png"]},{"timestamp":1725659343,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725659340120.png"]},{"timestamp":1725659643,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725659640565.png"]},{"timestamp":1725659943,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725659941182.png"]},{"timestamp":1725660243,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725660240243.png"]},{"timestamp":1725660543,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725660540635.png"]},{"timestamp":1725660843,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725660840953.png"]},{"timestamp":1725661143,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725661140716.png"]},{"timestamp":1725661443,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725661440829.png"]},{"timestamp":1725661743,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725661740058.png"]},{"timestamp":1725662043,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725662040807.png"]},{"timestamp":1725662343,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725662340989.png"]},{"timestamp":1725662643,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725662641356.png"]},{"timestamp":1725662943,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725662941526.png"]},{"timestamp":1725663243,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725663241631.png"]},{"timestamp":1725663543,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725663540002.png"]},{"timestamp":1725663843,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725663839993.png"]},{"timestamp":1725664143,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725664141499.png"]},{"timestamp":1725664443,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725664441832.png"]},{"timestamp":1725664743,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725664741584.png"]},{"timestamp":1725665044,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725665041675.png"]},{"timestamp":1725665343,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725665341671.png"]},{"timestamp":1725665644,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725665640672.png"]},{"timestamp":1725665944,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725665942027.png"]},{"timestamp":1725666244,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725666241453.png"]},{"timestamp":1725666544,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725666542509.png"]},{"timestamp":1725666844,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725666841962.png"]},{"timestamp":1725667144,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725667142352.png"]},{"timestamp":1725667444,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725667440314.png"]},{"timestamp":1725667744,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725667741930.png"]},{"timestamp":1725668044,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725668043151.png"]},{"timestamp":1725668344,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725668342332.png"]},{"timestamp":1725668644,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725668626212.png"]},{"timestamp":1725668944,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725668942994.png"]},{"timestamp":1725669244,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725669242687.png"]},{"timestamp":1725669544,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725669539016.png"]},{"timestamp":1725669844,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725669843208.png"]},{"timestamp":1725670144,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725670142700.png"]},{"timestamp":1725670444,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725670442876.png"]},{"timestamp":1725670744,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725670743558.png"]},{"timestamp":1725671044,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725671043245.png"]},{"timestamp":1725671344,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725671340420.png"]},{"timestamp":1725671645,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725671643428.png"]},{"timestamp":1725671945,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725671942795.png"]},{"timestamp":1725672245,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725672243434.png"]},{"timestamp":1725672545,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725672543548.png"]},{"timestamp":1725672845,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725672842973.png"]},{"timestamp":1725673145,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725673142833.png"]},{"timestamp":1725673445,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725673414830.png"]},{"timestamp":1725673745,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725673742872.png"]},{"timestamp":1725674045,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725674038522.png"]},{"timestamp":1725674345,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725674343304.png"]},{"timestamp":1725674645,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725674643141.png"]},{"timestamp":1725674945,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725674939970.png"]},{"timestamp":1725675245,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725675244004.png"]},{"timestamp":1725675545,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725675543788.png"]},{"timestamp":1725675845,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725675843150.png"]},{"timestamp":1725676145,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725676142362.png"]},{"timestamp":1725676445,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725676442359.png"]},{"timestamp":1725676745,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725676743322.png"]},{"timestamp":1725677045,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725677029007.png"]},{"timestamp":1725677345,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725677343829.png"]},{"timestamp":1725677646,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725677643789.png"]},{"timestamp":1725677946,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725677941831.png"]},{"timestamp":1725678246,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725678242851.png"]},{"timestamp":1725678546,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725678543784.png"]},{"timestamp":1725678846,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725678821509.png"]},{"timestamp":1725679146,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725679144451.png"]},{"timestamp":1725679446,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725679442731.png"]},{"timestamp":1725679746,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725679742363.png"]},{"timestamp":1725680046,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725680044376.png"]},{"timestamp":1725680346,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725680344497.png"]},{"timestamp":1725680646,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725680644510.png"]},{"timestamp":1725680946,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725680944575.png"]},{"timestamp":1725681246,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725681243713.png"]},{"timestamp":1725681546,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725681545193.png"]},{"timestamp":1725681846,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725681845280.png"]},{"timestamp":1725682146,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725682144457.png"]},{"timestamp":1725682446,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725682444422.png"]},{"timestamp":1725682746,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725682743809.png"]},{"timestamp":1725683046,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725683044028.png"]},{"timestamp":1725683346,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725683343672.png"]},{"timestamp":1725683647,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725683644734.png"]},{"timestamp":1725683947,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725683942285.png"]},{"timestamp":1725684247,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725684245861.png"]},{"timestamp":1725684547,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725684544181.png"]},{"timestamp":1725684847,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725684845712.png"]},{"timestamp":1725685147,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725685145215.png"]},{"timestamp":1725685447,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725685444487.png"]},{"timestamp":1725685747,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725685645087.png"]},{"timestamp":1725686047,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725686045478.png"]},{"timestamp":1725686347,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725686290075.png"]},{"timestamp":1725686647,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725686643601.png"]},{"timestamp":1725686947,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725686939042.png"]},{"timestamp":1725687247,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725687242288.png"]},{"timestamp":1725687547,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725687545526.png"]},{"timestamp":1725687847,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725687846122.png"]},{"timestamp":1725688147,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725688145215.png"]},{"timestamp":1725688447,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725688437208.png"]},{"timestamp":1725688747,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725688745605.png"]},{"timestamp":1725689047,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725689036693.png"]},{"timestamp":1725689347,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725689345954.png"]},{"timestamp":1725689647,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725689646628.png"]},{"timestamp":1725689947,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725689946292.png"]},{"timestamp":1725690248,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725690246094.png"]},{"timestamp":1725690548,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725690546278.png"]},{"timestamp":1725690848,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725690846429.png"]},{"timestamp":1725691148,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725691146303.png"]},{"timestamp":1725691448,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725691446355.png"]},{"timestamp":1725691748,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725691731062.png"]},{"timestamp":1725692048,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725692047000.png"]},{"timestamp":1725692348,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725692346652.png"]},{"timestamp":1725692648,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725692646275.png"]},{"timestamp":1725692948,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725692946144.png"]},{"timestamp":1725693248,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725693246954.png"]},{"timestamp":1725693548,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725693546640.png"]},{"timestamp":1725693848,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725693844057.png"]},{"timestamp":1725694148,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725694146649.png"]},{"timestamp":1725694448,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725694445515.png"]},{"timestamp":1725694748,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725694745682.png"]},{"timestamp":1725695048,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725695046656.png"]},{"timestamp":1725695348,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725695347420.png"]},{"timestamp":1725695648,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725695647472.png"]},{"timestamp":1725695948,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725695947405.png"]},{"timestamp":1725696248,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725696247821.png"]},{"timestamp":1725696548,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725696543785.png"]},{"timestamp":1725696849,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725696847452.png"]},{"timestamp":1725697149,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725697147270.png"]},{"timestamp":1725697449,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725697448019.png"]},{"timestamp":1725697749,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725697747813.png"]},{"timestamp":1725698049,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725698038016.png"]},{"timestamp":1725698349,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725698347933.png"]},{"timestamp":1725698649,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725698647764.png"]},{"timestamp":1725698949,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725698947999.png"]},{"timestamp":1725699249,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725699248179.png"]},{"timestamp":1725699549,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725699547782.png"]},{"timestamp":1725699849,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725699848038.png"]},{"timestamp":1725700149,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725700147730.png"]},{"timestamp":1725700449,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725700447899.png"]},{"timestamp":1725700749,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725700747651.png"]},{"timestamp":1725701049,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725700971711.png"]},{"timestamp":1725701349,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725701347751.png"]},{"timestamp":1725701649,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725701647696.png"]},{"timestamp":1725701949,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725701933023.png"]},{"timestamp":1725702249,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725702247846.png"]},{"timestamp":1725702549,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725702548320.png"]},{"timestamp":1725702850,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725702848452.png"]}],"icon":"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 11 11' aria-hidden='true'><polygon points='3 0 8 0 8 1 9 1 9 2 10 2 10 3 9 3 9 4 10 4 10 3 11 3 11 4 11 8 10 8 10 9 9 9 9 8 8 8 8 7 7 7 7 5 8 5 8 4 7 4 7 3 6 3 6 2 7 2 7 1 5 1 5 2 4 2 4 5 5 5 5 6 3 6 3 5 1 5 1 7 3 7 3 8 4 8 4 10 8 10 8 11 3 11 3 10 2 10 2 9 1 9 1 8 0 8 0 3 1 3 1 2 2 2 2 1 3 1 3 0'/><polygon points='8 9 8 10 9 10 9 9'/></svg>"}}
window.variationsConfig = variationsConfig