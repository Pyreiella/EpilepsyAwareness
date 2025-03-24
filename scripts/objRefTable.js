const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.Mouse,
		C3.Plugins.Flowchart,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SetAnimFrame
	];
};
self.C3_JsPropNameTable = [
	{PathA: 0},
	{PathB: 0},
	{Content: 0},
	{PathA_BG: 0},
	{PathB_BG: 0},
	{Mouse: 0},
	{FlowchartController: 0},
	{BGimage: 0}
];

self.InstanceType = {
	PathA: class extends self.ITextInstance {},
	PathB: class extends self.ITextInstance {},
	Content: class extends self.ITextInstance {},
	PathA_BG: class extends self.ITiledBackgroundInstance {},
	PathB_BG: class extends self.ITiledBackgroundInstance {},
	Mouse: class extends self.IInstance {},
	FlowchartController: class extends self.IInstance {},
	BGimage: class extends self.ISpriteInstance {}
}