const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Text
	];
};
self.C3_JsPropNameTable = [
	{BG: 0},
	{Path1: 0},
	{PathB: 0},
	{Content: 0},
	{PathA_BG: 0},
	{PathB_BG: 0}
];

self.InstanceType = {
	BG: class extends self.ITiledBackgroundInstance {},
	Path1: class extends self.ITextInstance {},
	PathB: class extends self.ITextInstance {},
	Content: class extends self.ITextInstance {},
	PathA_BG: class extends self.ITiledBackgroundInstance {},
	PathB_BG: class extends self.ITiledBackgroundInstance {}
}