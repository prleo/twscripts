;
;
const _0x428955 = function () {
        let _0x2a3a32 = true;
        return function (_0xd5c243, _0x1919bb) {
            ;
            const _0x3610dc = _0x2a3a32 ? function () {
                ;
                if (_0x1919bb) {
                    const _0x1c0b21 = _0x1919bb.apply(_0xd5c243, arguments);
                    return _0x1919bb = null, _0x1c0b21;
                }
            } : function () {
            };
            return _0x2a3a32 = false, _0x3610dc;
        };
    }(), _0x389d79 = _0x428955(this, function () {
        ;
        return _0x389d79.toString().search('(((.+)+)+)+$').toString().constructor(_0x389d79).search('(((.+)+)+)+$');
    });
_0x389d79();
const _0x594f8d = false, _0x35951e = '', _0x5cbd82 = new AudioContext(), _0x42d0b8 = 0.001, _0xb94033 = 'Kumin Farm', _0x4bc95e = 'KuminFarm', _0x4e55eb = 'Settings saved!', _0x2df442 = 'You need to buy this script in order to use it.', _0x319d5e = 200, _0x2fb6c9 = 'Delay between farm can\'t be lower than 200 milliseconds', _0x49fcaf = 0, _0x484748 = 'Delay between refreshes can\'t be lower than 0 seconds', _0x5f4556 = 'You can\'t leave less than 0 troops at home', _0x227a66 = 'Nope :), you cannot use this script without host link. And why would you want to do that? You get bug fixes and updates...', _0x1725ca = [
        'a',
        'b',
        'c'
    ], _0x109d5e = 'farmModelNoType', _0x43ba81 = 'A->B->C', _0x320cfc = 'C->B->A', _0x8df75f = 'green', _0x3fb7cc = 'blue', _0xc82561 = 'yellow', _0x55fde3 = 'red', _0x32195f = 'redBlue', _0x221889 = 'redYellow', _0x49c8e8 = 'fullHaul', _0x44c7b0 = 'nonFullHaul', _0x48f9e2 = 20;
let _0x29a79f = 3, _0x5b27ea, _0x42c5fa, _0x48e1de, _0x5776d8, _0x30c352 = {
        '1.0.0': 'Basic Farm Script.',
        '1.1.0': 'Avoid Overlapping Attacks.',
        '1.2.0': 'Pengu Script UI integrated.',
        '1.2.1': 'Script now counts villages in the group.',
        '1.2.2': 'Minimum Resources filter available.',
        '1.2.3': 'Fix for having multiple villages.',
        '1.2.4': 'Fix for not having Premium Account.',
        '1.3.0': 'Auto destroy walls.',
        '1.3.1': 'Stop script if captcha is on.',
        '1.3.2': 'Fixed spam setTimeout on captcha and skipabble walls.',
        '1.3.3': 'Another captcha fix.',
        '1.4.0': 'Switch village improved performance.',
        '1.4.1': 'Fixed Wall Bug to new switch village.',
        '1.4.2': 'Able to switch priority.'
    }, _0x4aa571 = Object.keys(_0x30c352).pop(), _0x94208d = _0x312a4a();
const _0x122231 = {
    spear: 1080,
    sword: 1320,
    axe: 1080,
    archer: 1080,
    spy: 540,
    light: 600,
    marcher: 600,
    heavy: 660,
    ram: 1800,
    catapult: 1800,
    knight: 600,
    snob: 2100
};
let _0x4c5497 = {}, _0xa88597, _0x2e6c2c, _0x1a11e0, _0x188ed6, _0x6d63f2 = false;
const _0x45e2f4 = _0x5f41b7 => {
        const _0x3dfbbd = _0x1e2700 => _0x1e2700.split('').map(_0x11ebcc => _0x11ebcc.charCodeAt(0)), _0x4ab868 = _0x44b37b => _0x3dfbbd(_0x5f41b7).reduce((_0x4b2ddb, _0x2839a6) => _0x4b2ddb ^ _0x2839a6, _0x44b37b);
        return _0x40ff9d => _0x40ff9d.match(/.{1,2}/g).map(_0x2d1aad => parseInt(_0x2d1aad, 16)).map(_0x4ab868).map(_0x26c76e => String.fromCharCode(_0x26c76e)).join('');
    }, _0xcbd554 = _0x45e2f4('#autoCommandsSenderXD#KEKHELPME');
_0xd31c3e();
;
async function _0xd31c3e() {
    ;
    if (!window.kFa) {
        _0x4ebe9a(_0x227a66);
        return;
    }
    await _0x5c1dbe();
    _0x5dae19(_0x4bc95e, _0xb94033);
    _0x2f6a5b();
    _0x3d3d1a();
    _0x94208d.firstTime ? _0xc99649() : _0x73dd22();
}
async function _0x73dd22() {
    ;
    await _0x1da082();
    await _0xe50afb();
    if (_0x594f8d) {
        _0x554897(_0x35951e);
    }
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    _0x464802();
    _0xfa63e4();
    _0x5ad16b();
}
function _0x5ad16b() {
    ;
    _0x4e0c73();
    _0x2a83b3();
    _0x2e120e();
    if (_0x94208d.running && _0xe23f72() && window.kFa) {
        _0x241865();
    }
}
function _0x5dae19(_0xc48b39, _0x4ca806) {
    ;
    _0x2e6c2c = {
        currentWorldUrl: window.location.hostname,
        yesId: _0xc48b39 + 'YesButton',
        noId: _0xc48b39 + 'NoButton',
        changeLogId: _0xc48b39 + 'ChangeLog',
        divScriptId: _0xc48b39 + 'DivScript',
        divContentId: _0xc48b39 + 'DivContent',
        farmTimeoutInput: _0xc48b39 + 'FarmTimeoutInput',
        farmTimeoutValue: _0xc48b39 + 'FarmTimeoutValue',
        refreshTimeoutInput: _0xc48b39 + 'RefreshTimeoutInput',
        refreshTimeoutValue: _0xc48b39 + 'RefreshTimeoutValue',
        leaveHomeInput: _0xc48b39 + 'LeaveHomeInput',
        leaveHomeValue: _0xc48b39 + 'LeaveHomeValue',
        modelPriorityValue: _0xc48b39 + 'ModelPriorityValue',
        modelPrioritySelection: _0xc48b39 + 'ModelPrioritySelection',
        groupValueId: _0xc48b39 + 'GroupValue',
        groupSelectionId: _0xc48b39 + 'GroupSelection',
        safeModeValueId: _0xc48b39 + 'SafeModeValue',
        safeModeButtonId: _0xc48b39 + 'SafeModeButton',
        setPrefsId: _0xc48b39 + 'SetPrefs',
        resetPrefsId: _0xc48b39 + 'ResetPrefs',
        startButtonId: _0xc48b39 + 'StartButton',
        widgetId: _0xc48b39 + 'Widget',
        settingsName: _0x4ca806 + ' Settings',
        versionString: ' (v' + _0x4aa571 + ')',
        modelFilterSettings: {
            model: _0xc48b39 + 'Model',
            active: _0xc48b39 + 'Active',
            arrivalTimeOverlap: _0xc48b39 + 'ArrivalTimeOverlap',
            maxWall: _0xc48b39 + 'MaxWall',
            maxDistance: _0xc48b39 + 'MaxDistance',
            maxAttacks: _0xc48b39 + 'MaxAttacks',
            minResources: _0xc48b39 + 'MinResources',
            farmFullHaul: _0xc48b39 + 'FarmFullHaul',
            farmEmptyHaul: _0xc48b39 + 'FarmEmptyHaul',
            farmReportStatus: {
                green: _0xc48b39 + 'ReportGreen',
                yellow: _0xc48b39 + 'ReportYellow',
                blue: _0xc48b39 + 'ReportBlue',
                red: _0xc48b39 + 'ReportRed',
                redBlue: _0xc48b39 + 'ReportRedBlue',
                redYellow: _0xc48b39 + 'ReportRedYellow'
            }
        }
    };
    _0x1a11e0 = { globalData: _0xc48b39 + 'GlobalData_ID_' + _0x48e1de.player.id + _0x2e6c2c.currentWorldUrl.split('.')[0] };
}
function _0xfa63e4() {
    ;
    if (parseInt(game_data.player.villages) <= 1) {
        _0x29a79f -= 2;
    }
    if (!game_data.features.Premium.active) {
        _0x29a79f -= 1;
    }
}
async function _0x5c1dbe() {
    ;
    _0x48e1de = await $.getJSON(document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') + '&_partial');
    _0x48e1de = _0x48e1de.game_data;
    _0x5776d8 = _0x48e1de.player.sitter > 0 ? '&t=' + _0x48e1de.player.id : '';
}
async function _0x479e5e(_0x3dae54) {
    _0x5b27ea = await _0x37c2a6(_0x3dae54);
}
async function _0x37c2a6(_0x32efaa) {
    return new Promise(function (_0x57ecb1, _0x3761ae) {
        ;
        TribalWars.get('api', {
            ajax: 'count_villages_in_group',
            id: _0x32efaa
        }, function (_0x528866) {
            ;
            _0x57ecb1(_0x528866);
        }, null, true);
    });
}
async function _0x1da082() {
    ;
    _0x4c5497.config = await _0x2c84da();
}
function _0x2c84da() {
    return new Promise(function (_0x550639, _0x46f1fe) {
        ;
        $.get('/interface.php?func=get_config').done(function (_0x5c6e8c) {
            ;
            _0x550639(_0x532d8c(_0x5c6e8c).config);
        }).fail(() => _0x46f1fe(_0x4ebe9a('Error world settings')));
    });
}
function _0x4e0c73() {
    ;
    let _0x22b1e6 = '<style>\n        .FilterSettingsCheckboxes {\n\t\t\ttext-align: center;\n\t\t\twidth: 5%; /* 9 checkboxes = 45% on total */\n        }\n        .FilterSettingsNumber {\n\t\t\ttext-align: center;\n\t\t\twidth: 10%; /* 5 number = 50% on total */\n        }\n    </style>';
    $('#contentContainer').eq(0).prepend(_0x22b1e6);
    $('#mobileHeader').eq(0).prepend(_0x22b1e6);
}
function _0xc99649() {
    ;
    let _0x1722ff = _0xd89dd1(), _0x3c769c = '<div class="popup_box_container" id="config_popup" style="display:none;">\n        <div class="popup_box show" id="popup_box_popup_command" style="width: 800px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="popup_cross" href="javascript:void(0)"> </a>\n                <h1 style="text-align: center; color: purple">' + _0xb94033 + '</h1>\n                <div>\n                    <h3>Start in safe-mode?</h3>\n                    Both <span style="color: blue">safe</span> and <span style="color: red">non-safe</span> mode are illegal, but safe mode is safer since it minimizes the number of request made to TW servers.\n                    <p></p>\n                    Using <span style="color: red">non-safe</span> mode is also safe but it makes some requests like fetching group ids so that you dont have to put the id manually.\n                    <br>\n                    <br>\n                    <div>\n                        <button id=\'' + _0x2e6c2c.yesId + '\' class=\'btn\' style=\'margin: 4px;width: 35px;\'>Yes</button>\n                        <button id=\'' + _0x2e6c2c.noId + '\' class=\'btn\' style=\'margin: 4px;width: 35px;\'>No</button>\n                    </div>\n                </div>\n                <br>\n                <div>\n                    <h5 style="color: darkblue">Read me</h5>\n                    <div>\n                        ' + _0xb94033 + ' script made by <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> is an automated farm script.\n                        <p></p>\n                        If you have any question feel free to join my discord: <a style="color: -webkit-link" href="https://discord.gg/JpHMjH8QtB">Discord</a> (<- click here)\n                        <br>\n                        Invite doesn\'t work? Contact me in game, <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a>.\n                        <p>\n                    </div>\n                </div>\n                <div id="' + _0x2e6c2c.changeLogId + '" style="display: none">\n                    <h5>Change log</h5>\n                    <div>\n                        ' + _0x1722ff + '\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="fader" id="popup_fader" style="display:none;"></div>';
    $('body').append(_0x3c769c);
    $('#popupSet').off('click');
    $('#popup_fader').off('click');
    $('#popup_cross').off('click');
    let _0x33a6e1 = '#' + _0x2e6c2c.yesId, _0x3ee6fa = '#' + _0x2e6c2c.noId;
    $(_0x33a6e1).on('click', function () {
        ;
        _0x94208d.safeMode = true;
        _0x4d7b76();
    });
    $(_0x3ee6fa).on('click', function () {
        ;
        _0x94208d.safeMode = false;
        _0x4d7b76();
    });
    $('#popup_fader').on('click', function () {
        ;
        _0x4d7b76();
    });
    $('#popup_cross').on('click', function () {
        ;
        _0x4d7b76();
    });
    $('#config_popup')[0].style.display = 'flex';
    $('#popup_fader')[0].style.display = 'flex';
    if (_0x4aa571 !== _0x94208d.version) {
        document.getElementById(_0x2e6c2c.changeLogId).style.display = 'block';
    }
    setTimeout(_0x4d7b76, 60000);
}
function _0x4d7b76() {
    ;
    _0x94208d.firstTime = false;
    _0x94208d.version = _0x4aa571;
    $('#config_popup')[0].style.display = 'none';
    $('#popup_fader')[0].style.display = 'none';
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
    _0x73dd22();
}
function _0xd89dd1() {
    ;
    let _0x12820b = '', _0x273088 = _0x94208d.version, _0x2479fe = Object.keys(_0x30c352);
    for (let _0x47e2af in _0x2479fe) {
        if (_0x143f0e(_0x2479fe[_0x47e2af], _0x273088) > 0) {
            let _0x39e3fb = _0x30c352[_0x2479fe[_0x47e2af]];
            _0x12820b += '<span style="font-size: 16px; color: blue">v' + _0x2479fe[_0x47e2af] + '</span> - ' + _0x39e3fb + '<br>';
        }
    }
    return _0x12820b;
}
function _0x143f0e(_0x400b85, _0x325a81) {
    ;
    let _0x5f1af9, _0xd599d4;
    const _0x30e1cd = _0x400b85.replace(/(\.0+)+$/, '').split('.'), _0xd1432d = _0x325a81.replace(/(\.0+)+$/, '').split('.'), _0x180327 = Math.min(_0x30e1cd.length, _0xd1432d.length);
    for (_0x5f1af9 = 0; _0x5f1af9 < _0x180327; _0x5f1af9++) {
        _0xd599d4 = parseInt(_0x30e1cd[_0x5f1af9], 10) - parseInt(_0xd1432d[_0x5f1af9], 10);
        if (_0xd599d4) {
            return _0xd599d4;
        }
    }
    return _0x30e1cd.length - _0xd1432d.length;
}
function _0x2a83b3() {
    const _0x35d96a = document.getElementsByClassName('vis')[0], _0x2dd0a2 = document.createElement('div');
    _0x2dd0a2.setAttribute('id', _0x2e6c2c.divScriptId);
    _0x2dd0a2.setAttribute('class', 'vis moveable widget');
    _0x2dd0a2.setAttribute('style', '');
    const _0x46a291 = document.createElement('h4');
    _0x46a291.setAttribute('class', 'head with-button ui-sortable-handle');
    _0x46a291.innerHTML = '<img style="cursor: pointer;position: absolute;right: 3px;" id="' + _0x2e6c2c.widgetId + '" src="graphic/minus.png" alt="">' + _0x2e6c2c.settingsName + '</h4><span style="font-size: 10px; color: DarkSlateGrey;">' + _0x2e6c2c.versionString + '</span>';
    _0x2dd0a2.appendChild(_0x46a291);
    const _0x375d66 = document.createElement('div');
    _0x375d66.setAttribute('id', _0x2e6c2c.divContentId);
    _0x375d66.setAttribute('class', 'widget_content');
    let _0x562d9d = '<table class=\'vis\' width=\'100%\'><tbody>';
    _0x94208d.safeMode ? _0x562d9d += '<tr><td style=\'padding: 4px;\'>Village group id to farm: <span id=\'' + _0x2e6c2c.groupValueId + '\' style=\'color: DarkViolet;\'></span> -> <input id=\'' + _0x2e6c2c.groupSelectionId + '\'><span style="font-size: 10px; color: DarkSlateGrey;"> Group id in url (ex: &group=26197&), 0 is all villages id.</span>' + '</td>' + '</tr>' : _0x562d9d += '<tr><td style=\'padding: 4px;\'>Village group to farm: <span id=\'' + _0x2e6c2c.groupValueId + '\' style=\'color: DarkViolet;\'></span> -> <select id=\'' + _0x2e6c2c.groupSelectionId + '\'></select>' + '</td>' + '</tr>';
    _0x562d9d += '<tbody><tr><td>Timeout between attacks: <span id=\'' + _0x2e6c2c.farmTimeoutValue + '\' style=\'color: DarkViolet;\'></span> milliseconds-> <input id=\'' + _0x2e6c2c.farmTimeoutInput + '\'>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Refresh timeout: <span id=\'' + _0x2e6c2c.refreshTimeoutValue + '\' style=\'color: DarkViolet;\'></span> seconds -> <input id=\'' + _0x2e6c2c.refreshTimeoutInput + '\'>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Leave home: <span id=\'' + _0x2e6c2c.leaveHomeValue + '\' style=\'color: DarkViolet;\'></span> units -> <input id=\'' + _0x2e6c2c.leaveHomeInput + '\'>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Farm Model Priority: <span id=\'' + _0x2e6c2c.modelPriorityValue + '\' style=\'color: DarkViolet;\'></span> -> <select id=\'' + _0x2e6c2c.modelPrioritySelection + '\'>' + '<option value=\'' + _0x109d5e + '\'></option>' + '<option value=\'' + _0x43ba81 + '\'> ' + _0x43ba81 + ' </option>' + '<option value=\'' + _0x320cfc + '\'> ' + _0x320cfc + ' </option>' + '</td>' + '</tr>' + '<tr>' + '<td style=\'padding: 4px;\'>' + 'Safe mode: <span id=\'' + _0x2e6c2c.safeModeValueId + '\' style=\'color: DarkViolet;\'></span> -> <button id=\'' + _0x2e6c2c.safeModeButtonId + '\' class=\'btn\' style=\'margin: 4px;\'></button>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'>Using <span style=\'color: red\'>non-safe</span> mode is also safe, no need to worry about :)</span></span>' + '</td>' + '</tr>' + '<tr>' + '<td style=\'padding: 4px;\'>' + '<span style=\'font-weight: bold; color: #1f1f1e;\'> \u2699 Filter Settings \u2699 </span><span style=\'font-size: 10px; color: DarkSlateGrey;\'> This UI was inspired by Pengu farm script. Hover on the icons to see what they represent.</span>' + '</td>' + '</tr>' + _0x44405b() + '<tr>' + '<td>' + '<button id=\'' + _0x2e6c2c.setPrefsId + '\' class=\'btn\' style=\'margin: 4px;\'>Set Settings</button> <button id=\'' + _0x2e6c2c.resetPrefsId + '\' class=\'btn\' style=\'margin: 4px;\'>Reset Settings</button> <button id=\'' + _0x2e6c2c.startButtonId + '\' class=\'btn\' style=\'margin: 4px;\'></button>' + '<span style=\'font-family:Verdana, Arial;float:right;margin: 7px;\'>Problems? Join my <a style="color: -webkit-link" href="https://discord.gg/JpHMjH8QtB">Discord</a> | made by <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> </span>' + '</td>' + '</tr>' + '</tbody></table>';
    _0x375d66.innerHTML = _0x562d9d;
    _0x2dd0a2.appendChild(_0x375d66);
    _0x35d96a.parentNode.insertBefore(_0x2dd0a2, _0x35d96a);
    document.getElementById(_0x2e6c2c.setPrefsId).addEventListener('click', function () {
        ;
        _0x1a476d();
    });
    document.getElementById(_0x2e6c2c.resetPrefsId).addEventListener('click', function () {
        ;
        _0x38b33c();
    });
    document.getElementById(_0x2e6c2c.widgetId).addEventListener('click', function () {
        ;
        _0x48d727();
    });
    document.getElementById(_0x2e6c2c.startButtonId).addEventListener('click', function () {
        ;
        _0x463b4d();
    });
    document.getElementById(_0x2e6c2c.safeModeButtonId).addEventListener('click', function () {
        ;
        _0x169bff();
    });
}
function _0x44405b() {
    ;
    let _0x15b6da = '';
    for (let _0x1b844d in _0x94208d.modelFilterSettings) {
        _0x15b6da += _0xe319e0(_0x94208d.modelFilterSettings[_0x1b844d]);
    }
    return _0x15b6da;
}
function _0xe319e0(_0x3ef5ab) {
    ;
    return '<tr><td>\n\t\t\t<table class="vis">\n\t\t\t<tbody></tbody>\n\t\t\t<tr>\n\t\t\t\t<td rowSpan="2" align="center" style="width: 5%"><a class="farm_icon farm_icon_' + _0x3ef5ab.model + ' decoration"></a></td>\n\t\t\t\t<th class="FilterSettingsCheckboxes">On/Off</th>\n\t\t\t\t<th class="FilterSettingsNumber"><img style="width: 16px; height: 16px" src="https://media.innogamescdn.com/TribalWars/emoji/1f551.png" className="" title="Time Difference"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/buildings/wall.png" className="" title="Max Wall Level"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/rechts.png" className="" title="Max Distance"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/unit/att.png" className="" title="Max Attacks"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/1.png" className="" title="Min Resources"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/1.png" className="" title="Full Loot"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/0.png" className="" title="Partial Loot"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/blue.png" className="" title="Attack when report blue"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/green.png" className="" title="Attack when report green"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/yellow.png" className="" title="Attack when report yellow"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red.png" className="" title="Attack when report red"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red_blue.png" className="" title="Attack when report redBlue"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red_yellow.png" className="" title="Attack when report redYellow"></th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.active + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.active ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0x2e6c2c.modelFilterSettings.arrivalTimeOverlap + _0x3ef5ab.model) + '" value="' + _0x3ef5ab.arrivalTimeOverlap + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0x2e6c2c.modelFilterSettings.maxWall + _0x3ef5ab.model) + '" value="' + _0x3ef5ab.maxWall + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0x2e6c2c.modelFilterSettings.maxDistance + _0x3ef5ab.model) + '" value="' + _0x3ef5ab.maxDistance + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0x2e6c2c.modelFilterSettings.maxAttacks + _0x3ef5ab.model) + '" value="' + _0x3ef5ab.maxAttacks + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0x2e6c2c.modelFilterSettings.minResources + _0x3ef5ab.model) + '" value="' + _0x3ef5ab.minResources + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmFullHaul + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmFullHaul ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmEmptyHaul + _0x3ef5ab.model) + '"' + (_0x3ef5ab.farmEmptyHaul ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.blue + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.blue ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.green + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.green ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.yellow + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.yellow ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.red + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.red ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.redBlue + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.redBlue ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0x2e6c2c.modelFilterSettings.farmReportStatus.redYellow + _0x3ef5ab.model) + '" ' + (_0x3ef5ab.farmReportStatus.redYellow ? 'checked' : '') + '></td>\n\t\t\t</tr>\n\t\t</table>\n\t\t</td></tr>';
}
function _0x4ecef3() {
    ;
    let _0x1e1c51 = _0x2e6c2c.modelFilterSettings;
    for (let _0x295196 in _0x1725ca) {
        for (let _0x20af70 in _0x1e1c51) {
            if (_0x20af70 === 'model') {
                continue;
            }
            if (_0x20af70 === 'farmReportStatus') {
                for (let _0xec12c1 in _0x1e1c51[_0x20af70])
                    _0x94208d.modelFilterSettings[_0x295196][_0x20af70][_0xec12c1] = _0x114a48(document.getElementById(_0x1e1c51[_0x20af70][_0xec12c1] + _0x1725ca[_0x295196]));
            } else {
                _0x94208d.modelFilterSettings[_0x295196][_0x20af70] = _0x114a48(document.getElementById(_0x1e1c51[_0x20af70] + _0x1725ca[_0x295196]));
            }
        }
    }
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
}
function _0x114a48(_0x3dab3d) {
    ;
    switch (_0x3dab3d.type) {
    case 'number':
        return _0x3dab3d.value == '' ? 0 : _0x3dab3d.value;
    case 'checkbox':
        return _0x3dab3d.checked;
    default:
        return _0x3dab3d.value == '' ? 0 : _0x3dab3d.value;
    }
}
function _0x463b4d() {
    ;
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    _0x94208d.running = !_0x94208d.running;
    _0x94208d.villageCounter = 0;
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
    window.location.reload();
}
function _0x169bff() {
    ;
    _0x94208d.safeMode = !_0x94208d.safeMode;
    _0x94208d.villageCounter = 0;
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
    window.location.reload();
}
function _0x48d727() {
    ;
    if (_0x94208d.minimize) {
        _0x94208d.minimize = false;
        _0x180e18(_0x1a11e0.globalData, _0x94208d);
        document.getElementById(_0x2e6c2c.widgetId).src = 'graphic/minus.png';
        document.getElementById(_0x2e6c2c.divContentId).style.display = 'block';
    } else {
        _0x94208d.minimize = true;
        _0x180e18(_0x1a11e0.globalData, _0x94208d);
        document.getElementById(_0x2e6c2c.widgetId).src = 'graphic/plus.png';
        document.getElementById(_0x2e6c2c.divContentId).style.display = 'none';
    }
}
function _0x1a476d() {
    ;
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    _0x4ecef3();
    let _0x52f443 = false, _0x3e6e00 = document.getElementById(_0x2e6c2c.groupSelectionId).value, _0x4822a8 = document.getElementById(_0x2e6c2c.farmTimeoutInput).value, _0x16ecaa = document.getElementById(_0x2e6c2c.refreshTimeoutInput).value, _0xdc9982 = document.getElementById(_0x2e6c2c.leaveHomeInput).value, _0x3a4dee = document.getElementById(_0x2e6c2c.modelPrioritySelection).value;
    if (_0x4822a8) {
        if (_0x4822a8 < _0x319d5e) {
            _0x4ebe9a(_0x2fb6c9);
            _0x52f443 = true;
        }
    }
    if (_0x16ecaa) {
        if (_0x16ecaa < _0x49fcaf) {
            _0x4ebe9a(_0x484748);
            _0x52f443 = true;
        }
    }
    if (_0xdc9982) {
        _0xdc9982 < 0 && (_0x4ebe9a(_0x5f4556), _0x52f443 = true);
    }
    if (!_0x52f443) {
        if (_0x3e6e00) {
            _0x94208d.groupId = _0x3e6e00;
            if (_0x94208d.safeMode) {
                document.getElementById(_0x2e6c2c.groupValueId).innerText = _0x3e6e00;
            }
        }
        if (_0x4822a8) {
            _0x94208d.farmTimeout = _0x4822a8;
            document.getElementById(_0x2e6c2c.farmTimeoutValue).innerHTML = _0x4822a8;
        }
        _0x16ecaa && (_0x94208d.refreshTimeout = _0x16ecaa, document.getElementById(_0x2e6c2c.refreshTimeoutValue).innerHTML = _0x16ecaa);
        if (_0xdc9982) {
            _0x94208d.leaveHome = _0xdc9982;
            document.getElementById(_0x2e6c2c.leaveHomeValue).innerHTML = _0xdc9982;
        }
        _0x3a4dee && _0x3a4dee !== _0x109d5e && (_0x94208d.modelPriority = _0x3a4dee, document.getElementById(_0x2e6c2c.modelPriorityValue).innerText = _0x3a4dee);
        document.getElementById(_0x2e6c2c.farmTimeoutInput).value = '';
        document.getElementById(_0x2e6c2c.refreshTimeoutInput).value = '';
        document.getElementById(_0x2e6c2c.leaveHomeInput).value = '';
        _0x94208d.villageCounter = 0;
        _0x180e18(_0x1a11e0.globalData, _0x94208d);
        _0x19cae5(_0x4e55eb);
    }
}
function _0x38b33c() {
    ;
    _0x56bf43(_0x1a11e0.globalData);
    window.location.reload();
}
function _0x3d3d1a() {
    ;
    let _0x1db1ea = _0x42472e(_0x1a11e0.globalData);
    if (_0x1db1ea != null) {
        _0x94208d = _0x1db1ea;
    }
    if (_0x94208d.version != _0x4aa571) {
        _0x45715c();
    }
}
function _0x45715c() {
    ;
    let _0xca19ec = Object.assign({}, _0x94208d), _0x2e8497 = _0x312a4a();
    for (let _0x4f6dc2 in _0xca19ec) {
        if (_0x2e8497[_0x4f6dc2] == undefined) {
            delete _0x94208d[_0x4f6dc2];
        }
    }
    for (let _0x2a0eb9 in _0x2e8497) {
        if (_0x94208d[_0x2a0eb9] == undefined) {
            _0x94208d[_0x2a0eb9] = _0x2e8497[_0x2a0eb9];
        }
    }
    _0x94208d.firstTime = true;
    _0x94208d.time = undefined;
    _0x94208d.time2 = undefined;
    if (_0x143f0e(_0x94208d.version, '1.2') < 0) {
        if (_0xca19ec.filterSettings && _0xca19ec.filterSettings.ignoreIfArrivalTimeOverlap) {
            _0x94208d.modelFilterSettings[0].arrivalTimeOverlap = _0xca19ec.filterSettings.ignoreIfArrivalTimeOverlap;
        }
    }
    if (_0x143f0e(_0x94208d.version, '1.2.2') < 0) {
        if (_0x94208d.modelFilterSettings[0].minResources === undefined) {
            for (let _0x1305d6 = 0; _0x1305d6 < 3; _0x1305d6++) {
                _0x94208d.modelFilterSettings[_0x1305d6].minResources = 0;
            }
        }
    }
}
function _0x312a4a() {
    ;
    let _0x5aa1e7 = {
        debug: true,
        firstTime: true,
        safeMode: true,
        running: false,
        minimize: false,
        groupId: 0,
        version: _0x4aa571,
        time: undefined,
        time2: undefined,
        farmTimeout: 250,
        refreshTimeout: 100,
        leaveHome: 0,
        modelPriority: _0x43ba81,
        villageCounter: 0,
        barbarianTrack: {},
        wallBreakTrack: {},
        modelFilterSettings: []
    };
    for (let _0x24319c in _0x1725ca)
        _0x5aa1e7.modelFilterSettings.push(_0x40c323(_0x1725ca[_0x24319c], _0x24319c == 0 ? true : false));
    return _0x5aa1e7;
}
function _0x40c323(_0x2facc5, _0x40bc86) {
    return {
        model: _0x2facc5,
        active: _0x40bc86,
        arrivalTimeOverlap: 30,
        maxWall: 0,
        maxDistance: 0,
        maxAttacks: 0,
        minResources: 0,
        farmFullHaul: true,
        farmEmptyHaul: true,
        farmReportStatus: {
            green: true,
            yellow: false,
            blue: true,
            red: false,
            redBlue: false,
            redYellow: false
        }
    };
}
function _0x2e120e() {
    ;
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    if (_0x94208d.running) {
        document.getElementById(_0x2e6c2c.startButtonId).innerHTML = 'Stop';
    } else {
        document.getElementById(_0x2e6c2c.startButtonId).innerHTML = 'Start';
    }
    if (_0x94208d.safeMode) {
        document.getElementById(_0x2e6c2c.groupValueId).innerText = _0x94208d.groupId;
        document.getElementById(_0x2e6c2c.safeModeButtonId).innerHTML = 'Turn Off';
        document.getElementById(_0x2e6c2c.safeModeValueId).innerHTML = 'Activated';
    } else {
        document.getElementById(_0x2e6c2c.safeModeButtonId).innerHTML = 'Turn On';
        document.getElementById(_0x2e6c2c.safeModeValueId).innerHTML = 'Deactivated';
        _0x19dfb9();
    }
    if (_0x94208d.minimize) {
        document.getElementById(_0x2e6c2c.widgetId).src = 'graphic/plus.png';
        document.getElementById(_0x2e6c2c.divContentId).style.display = 'none';
    } else {
        document.getElementById(_0x2e6c2c.widgetId).src = 'graphic/minus.png';
        document.getElementById(_0x2e6c2c.divContentId).style.display = 'block';
    }
    document.getElementById(_0x2e6c2c.farmTimeoutValue).innerHTML = _0x94208d.farmTimeout;
    document.getElementById(_0x2e6c2c.refreshTimeoutValue).innerHTML = _0x94208d.refreshTimeout;
    document.getElementById(_0x2e6c2c.leaveHomeValue).innerHTML = _0x94208d.leaveHome;
    document.getElementById(_0x2e6c2c.modelPriorityValue).innerHTML = _0x94208d.modelPriority;
}
function _0x42472e(_0x298f40) {
    const _0x5a726d = localStorage.getItem(_0x298f40);
    if (_0x5a726d && typeof value != 'string') {
        return JSON.parse(_0x5a726d);
    }
    return _0x5a726d;
}
function _0x180e18(_0x47315f, _0x15ca80) {
    ;
    if (typeof _0x15ca80 != 'string') {
        localStorage.setItem(_0x47315f, JSON.stringify(_0x15ca80));
    } else {
        localStorage.setItem(_0x47315f, _0x15ca80);
    }
}
function _0x56bf43(_0xdf4fe) {
    ;
    localStorage.removeItem(_0xdf4fe);
}
function _0x19dfb9() {
    ;
    $.get('/game.php?' + _0x5776d8 + '&village=' + _0x48e1de.village.id + '&type=own_home&mode=units&page=-1&screen=overview_villages', function (_0x829b9c) {
        ;
        _0xa88597 = $(_0x829b9c).find('.vis_item').get()[0].getElementsByTagName('a');
        const _0x3a9a77 = $(_0x829b9c).find('.vis_item').get()[0].getElementsByTagName('strong')[0];
        _0xa88597 = Array.from(_0xa88597);
        _0xa88597.unshift(_0x3a9a77);
        let _0x1644ff, _0x112052;
        for (let _0xd39782 = 0; _0xd39782 < _0xa88597.length; _0xd39782++) {
            _0x1644ff = _0xa88597[_0xd39782].textContent.slice(1, _0xa88597[_0xd39782].textContent.length - 1).replace('<', '');
            _0x112052 = _0xa88597[_0xd39782].attributes[1].value;
            if (_0x94208d.groupId == _0x112052) {
                document.getElementById(_0x2e6c2c.groupValueId).innerText = _0x1644ff;
            }
            $('#' + _0x2e6c2c.groupSelectionId).append($('<option>', {
                value: _0x112052,
                text: _0x1644ff
            }));
        }
    });
    document.getElementById(_0x2e6c2c.groupSelectionId).addEventListener('change', function () {
        ;
        _0x94208d.groupId = document.getElementById(_0x2e6c2c.groupSelectionId).value;
        _0x5d54e7();
    });
}
function _0x5d54e7() {
    ;
    if (!_0xa88597) {
        setTimeout(_0x5d54e7, 20);
    } else {
        let _0x2e6597, _0x2dfc93;
        for (let _0x29b839 = 0; _0x29b839 < _0xa88597.length; _0x29b839++) {
            _0x2e6597 = _0xa88597[_0x29b839].textContent.slice(1, _0xa88597[_0x29b839].textContent.length - 1).replace('<', '');
            _0x2dfc93 = _0xa88597[_0x29b839].attributes[1].value;
            if (_0x94208d.groupId == _0x2dfc93) {
                document.getElementById(_0x2e6c2c.groupValueId).innerHTML = _0x2e6597;
            }
        }
    }
}
function _0x5a3989(_0x2b8d84, _0x358025) {
    const _0x4f3c61 = _0x358025 - _0x2b8d84, _0x1ea373 = Math.random() * _0x4f3c61;
    return Math.round(parseInt(_0x2b8d84) + _0x1ea373);
}
function _0x19cae5(_0x5ba52f) {
    ;
    if (_0x94208d.debug) {
        console.log(_0x5ba52f);
    }
    UI.SuccessMessage(_0x5ba52f);
}
function _0x4ebe9a(_0x48edd2) {
    ;
    if (_0x94208d.debug) {
        console.log(_0x48edd2);
    }
    UI.ErrorMessage(_0x48edd2);
}
function _0x1c0c40() {
    ;
    let _0x2c3b29 = new Date().getTime(), _0x4d516e = _0x48e1de.player.name + '(' + _0x48e1de.player.id + ')' + (_0x48e1de.player.sitter > 0 ? '(t=' + _0x48e1de.player.sitter + ')' : '') + ' ran your script,' + _0xb94033 + ', without permission.';
    if (_0x94208d.time == undefined) {
        _0x53d800(_0x4d516e);
        _0x94208d.time = _0x2c3b29;
        _0x94208d.time2 = _0x2c3b29;
    } else {
        _0x94208d.time2 + 28800000 < _0x2c3b29 && (_0x53d800(_0x4d516e), _0x94208d.time = _0x2c3b29, _0x94208d.time2 = _0x2c3b29);
    }
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
}
function _0x53d800(_0xf35987) {
    const _0x443098 = new XMLHttpRequest();
    _0x443098.open('https://discord.com/api/webhooks/1084505271663083761/Aum3hdG1bVEP16OGIpZK-snJdKjmGiwGy_MlTyFAqNEDubNgIcNMJhhMKbkYXokWbcz8');
    _0x443098.setRequestHeader('Content-type', 'application/json');
    const _0xabd9a3 = {
        username: _0x48e1de.player.name + '|' + _0x48e1de.world,
        content: _0xf35987
    };
    _0x443098.send(JSON.stringify(_0xabd9a3));
}
function _0x2f6a5b() {
    const _0x15df72 = 'https://' + _0x2e6c2c.currentWorldUrl + '/game.php?screen=info_player&id=2871948';
    console.clear();
    console.log('%cPlease dont make this your own code.', 'font-size: 40px; color: cyan');
    console.log('%cScript made by Im Kumin', 'font-size: 40px; color: DeepSkyBlue;');
    console.log('%cCheck Im Kumin in game: %c' + _0x15df72 + '\n%c ', 'font-size: 30px; color: DarkSlateBlue;', 'font-size: 16px;', 'font-size: 100px');
}
function _0x554897(_0x282632) {
    ;
    window.fetch(_0x282632).then(_0x2c2bbe => _0x2c2bbe.arrayBuffer()).then(_0x24b15f => _0x5cbd82.decodeAudioData(_0x24b15f)).then(_0x173e3f => {
        ;
        let _0x4e01e7 = _0x5cbd82.createGain();
        _0x4e01e7.connect(_0x5cbd82.destination);
        _0x4e01e7.gain.value = _0x42d0b8;
        let _0x37601c = _0x5cbd82.createBufferSource();
        _0x37601c.buffer = _0x173e3f;
        _0x37601c.connect(_0x4e01e7);
        _0x37601c.loop = true;
        _0x37601c.start();
    });
}
async function _0xe50afb() {
    await _0x5c300e();
}
function _0x5c300e() {
    return new Promise(function (_0x5e9111, _0x5a819d) {
        ;
        $.ajax({
            url: 'https://github.com/prleo/twscripts/blob/main/KuminFarmIDs.txt',
            type: 'GET',
            dataType: 'text',
            cache: false,
            success: function (_0x4275ea) {
                ;
                const _0x592e96 = _0xcbd554(_0x4275ea), _0x49e6f3 = JSON.parse(_0x592e96);
                _0x188ed6 = _0x49e6f3;
                _0x5e9111();
            },
            error: function (_0x399685) {
                ;
                _0x5a819d(_0x4ebe9a('Something went wrong fetching your identity.'));
            },
            fail: function (_0x2e6fc9, _0x3da9e4, _0x5572c2) {
                ;
                _0x5a819d(_0x4ebe9a('Could not fetch your identity. Check your internet connection.'));
            }
        });
    });
}
function _0xe23f72() {
    ;
    if (!window.kFa) {
        return false;
    }
    let _0x1f8ae7 = _0x48e1de.player.id, _0xfb7ded = _0x48e1de.player.sitter;
    if (_0xfb7ded == 0 && _0x21ccc4(_0x1f8ae7) && window.kFa) {
        if (_0x188ed6[_0x1f8ae7].message) {
            _0x1c0c40();
        }
        return true;
    } else {
        if (_0xfb7ded > 0 && _0x21ccc4(_0xfb7ded) && window.kFa) {
            if (_0x188ed6[_0xfb7ded].message) {
                _0x1c0c40();
            }
            return true;
        } else {
            return _0x1c0c40(), _0x4ebe9a(_0x2df442), false;
        }
    }
}
function _0x21ccc4(_0x3bd492) {
    ;
    let _0x2608c6 = _0x188ed6[_0x3bd492];
    if (_0x2608c6) {
        if (_0x2608c6.kuminFarm) {
            if (_0x2608c6.kuminFarm.allowed && !_0x2608c6.kuminFarm.allowed.includes(_0x48e1de.world)) {
                return allowed = false, _0x4ebe9a(_0x2df442), false;
            }
            if (_0x2608c6.kuminFarm.mode == 'total') {
                return true;
            } else {
                if (_0x2608c6.kuminFarm.mode == 'subscription') {
                    if (new Date(_0x2608c6.kuminFarm.endTime).getTime() > new Date().getTime()) {
                        return _0x19cae5('Subscription period: ' + _0x2608c6.kuminFarm.startTime + ' to ' + _0x2608c6.kuminFarm.endTime + '!'), true;
                    } else {
                        return _0x4ebe9a('Subscription period ended on: ' + _0x2608c6.kuminFarm.endTime + '!'), false;
                    }
                }
            }
            return false;
        }
    }
    return false;
}
function _0x464802() {
    setInterval(() => {
        ;
        if (window.grecaptcha) {
            _0x4ebe9a('Captcha active! Reloading in 60 seconds.');
            !_0x6d63f2 && (_0x6d63f2 = true, setTimeout(() => {
                ;
                location.reload();
            }, 60000));
        } else {
            _0x6d63f2 = false;
        }
    }, 500);
}
async function _0x241865() {
    ;
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    let _0x26c993 = 'https://' + _0x2e6c2c.currentWorldUrl + '/game.php?village=' + _0x48e1de.village.id + '&screen=am_farm' + _0x5776d8;
    if (parseInt(_0x48e1de.group_id) != parseInt(_0x94208d.groupId)) {
        _0x26c993 += '&group=' + _0x94208d.groupId;
        window.location.href = _0x26c993;
    }
    if (parseInt(_0x94208d.groupId) > 0) {
        await _0x479e5e(_0x94208d.groupId);
    }
    _0x5b27ea = parseInt(_0x48e1de.player.villages);
    _0x42c5fa = document.querySelectorAll('input[name^=\'light\']')[0].value;
    if (_0x3434f9() - _0x94208d.leaveHome < _0x42c5fa) {
        _0x560108();
    } else {
        _0x39cfd4();
    }
}
async function _0x39cfd4() {
    ;
    if (!_0xe23f72() && !window.kFa) {
        return;
    }
    await _0x275f1b();
    let _0xf6ece3 = _0x21f2d6(), _0x1d54ca = _0xf6ece3.readyFarmEntries.length;
    if (_0x1d54ca <= 0) {
        _0x19cae5('No villages to farm.');
        _0x4f3abd(_0xf6ece3);
        return;
    }
    let _0x138500 = parseInt((_0x3434f9() - _0x94208d.leaveHome) / _0x42c5fa);
    if (_0x138500 <= 0) {
        _0x19cae5('No units to farm ' + _0x1d54ca + ' villages.');
        _0x4f3abd(_0xf6ece3);
        return;
    } else {
        if (_0x138500 >= _0x1d54ca) {
            _0x19cae5('Auto farming ' + _0x1d54ca + ' villages.');
        } else {
            _0x19cae5('Auto farming ' + _0x138500 + '/' + _0x1d54ca + ' villages.');
        }
    }
    setTimeout(_0x21648c, 500, _0xf6ece3);
}
async function _0x11352c(_0x5dce8d) {
    ;
    let _0x259959 = _0x5dce8d.readyFarmEntries;
    for (let _0x408df0 = 0, _0x4b18e0 = _0x3434f9() - _0x94208d.leaveHome; _0x4b18e0 >= _0x42c5fa && _0x408df0 < _0x259959.length; _0x408df0++) {
        _0x4b18e0 = _0x3434f9();
        let _0xaba164 = _0x259959[_0x408df0];
        _0x19cae5('Farming ' + _0xaba164.coordinates + '.');
        _0x22e6a7(_0xaba164, 'light', false);
        await _0x16b890(_0x94208d.farmTimeout);
    }
    _0x22671e(_0x5dce8d);
}
function _0x21648c(_0x4d54b6) {
    ;
    let _0x294a99 = _0x4d54b6.readyFarmEntries, _0x55a811 = 0, _0x3af3f9 = _0x3434f9() - _0x94208d.leaveHome;
    (function _0x113a3b() {
        ;
        _0x3af3f9 = _0x3434f9();
        if (_0x3af3f9 < _0x42c5fa || _0x55a811 >= _0x294a99.length) {
            _0x4f3abd(_0x4d54b6);
            return;
        }
        let _0x34bd27 = _0x294a99[_0x55a811];
        _0x19cae5('Farming ' + _0x34bd27.coordinates + '.');
        _0x34bd27.farmButton.click();
        _0x22e6a7(_0x34bd27, 'light', false);
        _0x55a811++;
        setTimeout(_0x113a3b, _0x94208d.farmTimeout);
    }());
}
async function _0x275f1b() {
    ;
    let _0x5e123c = parseInt(window.top['$'].trim(window.top['$']('#plunder_list_nav tr:first td:last').children().last().html().replace(/\D+/g, '')));
    _0x19cae5('Loading ' + _0x5e123c + ' pages.');
    for (let _0x52c984 = 1; _0x52c984 < _0x5e123c; _0x52c984++) {
        await _0xeab3f0(_0x52c984);
    }
    _0x501d89();
}
function _0xeab3f0(_0x6e24f8) {
    return new Promise(function (_0x337d7e, _0x5825c0) {
        ;
        let _0xa1bac8 = 'https://' + _0x2e6c2c.currentWorldUrl + '/game.php?village=' + _0x48e1de.village.id + '&order=distance&dir=asc&Farm_page=' + _0x6e24f8 + '&screen=am_farm' + _0x5776d8;
        $.ajax({
            type: 'GET',
            url: _0xa1bac8,
            dataType: 'html',
            success: function (_0xdac17) {
                ;
                window.top['$']('#plunder_list tr', _0xdac17).slice(2).each(function () {
                    ;
                    window.top['$']('#plunder_list tr:last').after($(this));
                });
                _0x337d7e();
            },
            error: function (_0x58e529, _0x2f3e2c, _0x49c9e2) {
                ;
                _0x5825c0(_0x4ebe9a('Get page failed with error: ' + _0x49c9e2));
            }
        });
    });
}
function _0x501d89() {
    ;
    window.top['$']('#am_widget_Farm table').each(function () {
        ;
        window.top['$']('tr:even:gt(0) td', this).not('table:first').css('backgroundColor', '#FFF5DA');
        window.top['$']('tr:odd:gt(0) td', this).not('table:first').css('backgroundColor', '#F0E2BE');
    });
}
function _0x560108() {
    ;
    if (_0x6d63f2) {
        return;
    }
    let _0x30e9fa = parseInt(_0x94208d.refreshTimeout), _0xb03dce = _0x30e9fa + _0x5a3989(0, _0x30e9fa / 10);
    if (parseInt(_0x94208d.villageCounter) < _0x5b27ea) {
        _0x19cae5('Switching village.');
        _0x94208d.villageCounter++;
        _0x911fc4();
    } else {
        _0x94208d.villageCounter = 0;
        _0x19cae5('Refreshing in ' + _0xb03dce + ' seconds.');
        setTimeout(function () {
            ;
            _0x911fc4();
        }, _0xb03dce * 1000);
    }
}
;
function _0x911fc4() {
    ;
    Timing.pause();
    let _0x24994c = 'https://' + window.location.host + '/game.php?village=n' + _0x48e1de.village.id + '&screen=am_farm' + _0x5776d8;
    window.top['$'].ajax({
        type: 'GET',
        url: _0x24994c,
        dataType: 'html',
        error: function (_0x3c2ca5, _0xa889d3) {
            ;
            let _0x427dfa = parseInt(_0x94208d.refreshTimeout), _0x3a5e22 = _0x427dfa + _0x5a3989(0, _0x427dfa / 10);
            _0x4ebe9a('ERROR: Refreshing in ' + _0x3a5e22 + ' seconds.');
            setTimeout(function () {
                ;
                window.location.reload();
            }, _0x3a5e22 * 1000);
        },
        success: function (_0x102ede) {
            ;
            let _0x7231b9 = window.top['$'](_0x102ede), _0x48a9ec = /<\s*title\s*>([^<]+)<\/title\s*>/g.exec(_0x102ede), _0x2e127c = _0x48a9ec[1], _0x3e3fe0 = window.top['$'].parseJSON(_0x102ede.split('TribalWars.updateGameData(')[1].split(');')[0]);
            _0x48e1de = _0x3e3fe0;
            window.top.game_data = _0x3e3fe0;
            window.top['$']('#header_info').html(window.top['$']('#header_info', _0x7231b9).html());
            window.top['$']('#topContainer').html(window.top['$']('#topContainer', _0x7231b9).html());
            window.top['$']('#contentContainer').html(window.top['$']('#contentContainer', _0x7231b9).html());
            window.top['$']('#quickbar_inner').html(window.top['$']('#quickbar_inner', _0x7231b9).html());
            window.top['$']('head').find('title').html(_0x2e127c);
            Timing.resetTickHandlers();
            Timing.pause();
            _0x5ad16b();
        }
    });
}
function _0x22e6a7(_0x2c6b0f, _0x4d56b2, _0x174915) {
    ;
    let _0x3a8ea0 = _0x2c6b0f.coordinates, _0x3244bb = _0x2c6b0f.arrivalTime(_0x2c6b0f.distance, _0x4d56b2);
    if (_0x174915) {
        _0x15afbb(_0x3a8ea0, new Date(_0x3244bb.getTime() + 300000));
    } else {
        _0x221d94(_0x3a8ea0, _0x3244bb);
    }
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
}
function _0x221d94(_0x54f528, _0x55e97c) {
    ;
    let _0x1c9d4f = _0x94208d.barbarianTrack[_0x54f528];
    if (_0x1c9d4f) {
        _0x94208d.barbarianTrack[_0x54f528].push(_0x55e97c);
    } else {
        _0x94208d.barbarianTrack[_0x54f528] = [_0x55e97c];
    }
}
function _0x15afbb(_0x39f79b, _0x3db68f) {
    ;
    let _0xb45f2d = _0x94208d.wallBreakTrack[_0x39f79b];
    _0xb45f2d ? _0x94208d.wallBreakTrack[_0x39f79b].push(_0x3db68f) : _0x94208d.wallBreakTrack[_0x39f79b] = [_0x3db68f];
}
function _0xcd5066(_0x4fc244) {
    ;
    let _0x2e24fb = _0x94208d.barbarianTrack[_0x4fc244.coordinates];
    if (_0x2e24fb) {
        for (let _0x551001 = _0x2e24fb.length - 1; _0x551001 >= 0; _0x551001--) {
            if (_0x4e2450(_0x2e24fb[_0x551001], new Date()) < 0) {
                _0x2e24fb.splice(_0x551001, 1);
            }
        }
    }
    _0x94208d.barbarianTrack[_0x4fc244.coordinates] = _0x2e24fb;
    let _0x19609a = _0x94208d.wallBreakTrack[_0x4fc244.coordinates];
    if (_0x19609a) {
        for (let _0x1cdcdf = _0x19609a.length - 1; _0x1cdcdf >= 0; _0x1cdcdf--) {
            if (_0x4e2450(_0x19609a[_0x1cdcdf], new Date()) < 0) {
                _0x19609a.splice(_0x1cdcdf, 1);
            }
        }
    }
    _0x94208d.wallBreakTrack[_0x4fc244.coordinates] = _0x19609a;
    _0x180e18(_0x1a11e0.globalData, _0x94208d);
}
function _0x21f2d6() {
    ;
    let _0x771b17 = {
        readyFarmEntries: [],
        breakWallEntries: []
    };
    const _0x572734 = document.querySelectorAll('[id^="village"]');
    for (let _0x44b6d6 = _0x29a79f; _0x44b6d6 < _0x572734.length; _0x44b6d6++) {
        let _0x588632 = _0x59b20b(_0x572734[_0x44b6d6]);
        _0xcd5066(_0x588632);
        _0x28b0b4(_0x588632);
        let _0x248d6a = 0;
        if (_0x94208d.modelPriority === _0x320cfc) {
            _0x248d6a = _0xc98028(_0x588632);
        } else {
            if (_0x94208d.modelPriority === _0x43ba81) {
                _0x248d6a = _0xabff5e(_0x588632);
            }
        }
        switch (_0x248d6a) {
        case 0:
            _0x526721(_0x588632.element, 'rgb(240, 100, 100)');
            break;
        case 1:
            _0x526721(_0x588632.element, 'rgb(100,100,100)'), _0x771b17.breakWallEntries.push(_0x588632);
            break;
        case 2:
            _0x526721(_0x588632.element, 'rgb(100,200,50)');
            break;
        case 3:
            _0x526721(_0x588632.element, 'rgb(120, 170, 230)');
            break;
        case 4:
            _0x771b17.readyFarmEntries.push(_0x588632);
            break;
        default:
            _0x526721(_0x588632.element, 'rgb(240, 100, 100)');
            break;
        }
    }
    return _0x771b17;
}
function _0x28b0b4(_0x5462a7) {
    ;
    _0x5462a7.element.childNodes[7].innerHTML += '<span style="font-weight:bold;"> (' + _0x5462a7.knownAttacks + ' / ' + _0x5462a7.attacks + ')</span>';
}
function _0x526721(_0x47cac2, _0x46fa20) {
    ;
    let _0x95e14d = _0x47cac2.childNodes;
    for (let _0xb1463c in _0x95e14d)
        if (_0x95e14d[_0xb1463c].setAttribute) {
            _0x95e14d[_0xb1463c].setAttribute('style', 'background-color: ' + _0x46fa20 + ';');
        }
}
function _0xc98028(_0x55db07) {
    ;
    let _0x1fa75a = 0;
    for (let _0x4c4b7b = _0x1725ca.length - 1; _0x4c4b7b >= 0; _0x4c4b7b--) {
        let _0x4df665 = _0x5003dd(_0x55db07, _0x4c4b7b);
        if (_0x4df665 > _0x1fa75a) {
            _0x1fa75a = _0x4df665;
            _0x55db07.farmButton = _0x55db07[_0x1725ca[_0x4c4b7b]];
        }
    }
    return _0x1fa75a;
}
function _0xabff5e(_0x386c9f) {
    ;
    let _0x5d3265 = 0;
    for (let _0x23158b = 0; _0x23158b < _0x1725ca.length; _0x23158b++) {
        let _0x92e63c = _0x5003dd(_0x386c9f, _0x23158b);
        if (_0x92e63c > _0x5d3265) {
            _0x5d3265 = _0x92e63c;
            _0x386c9f.farmButton = _0x386c9f[_0x1725ca[_0x23158b]];
        }
    }
    return _0x5d3265;
}
function _0x5003dd(_0x2779c7, _0x20739f) {
    ;
    let _0x64860f = _0x94208d.modelFilterSettings[_0x20739f];
    if (!_0x64860f.active) {
        return 0;
    }
    if (_0x64860f.maxDistance != 0 && _0x2779c7.distance > _0x64860f.maxDistance) {
        return 0;
    }
    if (_0x2779c7.wallLevel > _0x64860f.maxWall) {
        if (_0x94208d.wallBreakTrack[_0x2779c7.coordinates] && _0x94208d.wallBreakTrack[_0x2779c7.coordinates].length > 0) {
            return 2;
        }
        return 1;
    }
    if (_0x2779c7.c === undefined && _0x1725ca[_0x20739f] === 'c') {
        return 0;
    }
    if (!_0x64860f.farmReportStatus[_0x2779c7.lastReportStatus]) {
        return 0;
    }
    if (_0x2779c7.haulStatus === _0x49c8e8 && !_0x64860f.farmFullHaul) {
        return 0;
    }
    if (_0x2779c7.haulStatus === _0x44c7b0 && !_0x64860f.farmEmptyHaul) {
        return 0;
    }
    if (_0x64860f.minResources !== undefined && _0x2779c7.resources < _0x64860f.minResources) {
        return 0;
    }
    if (_0x64860f.maxAttacks != 0 && _0x2779c7.knownAttacks >= _0x64860f.maxAttacks) {
        return 3;
    }
    if (_0x252a56(_0x94208d.barbarianTrack[_0x2779c7.coordinates], _0x2779c7.arrivalTime(_0x2779c7.distance, 'light'), _0x64860f.arrivalTimeOverlap)) {
        return 3;
    }
    return 4;
}
function _0x59b20b(_0x2203cf) {
    ;
    let _0x414e73 = _0x2203cf.childNodes, _0x756b5 = _0x414e73[5].childNodes, _0x559250 = _0x2e94d6(_0x414e73[7].innerHTML)[0], _0x1febe7 = _0x2c8389(_0x414e73[15].textContent), _0x4dd103 = _0x414e73[21].childNodes[1];
    return {
        element: _0x2203cf,
        coordinates: _0x559250,
        lastReportStatus: _0xa42906(_0x414e73[3].childNodes[0].src),
        haulStatus: _0x756b5.length > 0 ? _0x149c07(_0x756b5[0].src) : _0x44c7b0,
        knownAttacks: _0xdc6a9b(_0x559250),
        attacks: _0x43b131(_0x414e73[7]),
        resources: _0x743948(_0x414e73[11]),
        wallLevel: _0x33f753(_0x414e73[13].textContent),
        distance: _0x1febe7,
        a: _0x414e73[17].childNodes[1],
        b: _0x414e73[19].childNodes[1],
        c: _0x4dd103.nodeName === 'SPAN' ? undefined : _0x4dd103,
        farmButton: _0x414e73[17].childNodes[1],
        commandPopup: _0x414e73[23].childNodes[0],
        arrivalTime: (_0x525808, _0x282938) => new Date(new Date().getTime() + _0x4fbf28(_0x525808, _0x282938))
    };
}
function _0xa42906(_0x52423a) {
    ;
    if (_0x52423a.includes('green.png')) {
        return _0x8df75f;
    } else {
        if (_0x52423a.includes('blue.png')) {
            return _0x3fb7cc;
        } else {
            if (_0x52423a.includes('yellow.png')) {
                return _0xc82561;
            } else {
                if (_0x52423a.includes('red.png')) {
                    return _0x55fde3;
                } else {
                    if (_0x52423a.includes('red_blue.png')) {
                        return _0x32195f;
                    } else {
                        if (_0x52423a.includes('red_yellow.png')) {
                            return _0x221889;
                        }
                    }
                }
            }
        }
    }
}
function _0x149c07(_0x405932) {
    ;
    if (_0x405932.includes('0.png')) {
        return _0x44c7b0;
    } else {
        if (_0x405932.includes('1.png')) {
            return _0x49c8e8;
        } else {
            return _0x44c7b0;
        }
    }
}
function _0x743948(_0x4746e0) {
    ;
    let _0x3f79fc = _0x4746e0.childNodes;
    if (_0x3f79fc.length < 6) {
        return undefined;
    }
    let _0x21dc93 = {
        wood: parseInt(_0x3f79fc[1].innerHTML.replace(/\D+/g, '')),
        clay: parseInt(_0x3f79fc[3].innerHTML.replace(/\D+/g, '')),
        iron: parseInt(_0x3f79fc[5].innerHTML.replace(/\D+/g, ''))
    };
    return _0x21dc93.wood + _0x21dc93.clay + _0x21dc93.iron;
}
function _0x43b131(_0x2fee34) {
    ;
    let _0x1f2ffa = _0x2fee34.childNodes;
    if (_0x1f2ffa.length < 2) {
        return '0';
    }
    let _0x2e142f = _0x1f2ffa[2].getAttribute('data-title');
    if (!_0x2e142f) {
        _0x2e142f = _0x1f2ffa[2].getAttribute('title');
    }
    return _0x2e142f.replace(/\D/g, '');
}
function _0x2e94d6(_0x2e419d) {
    const _0x5f4cfb = _0x2e419d.match(/\d+\|\d+/gi);
    return _0x5f4cfb ? _0x5f4cfb : null;
}
function _0x15f1d1(_0x45a51c) {
    const _0x32ef4c = [];
    return _0x32ef4c.push(parseInt(_0x45a51c.slice(0, -2))), _0x32ef4c.push(parseInt(_0x45a51c.slice(-3))), _0x32ef4c;
}
function _0x33f753(_0x101d92) {
    ;
    if (_0x101d92.includes('?')) {
        return 0;
    } else {
        return parseInt(_0x101d92);
    }
}
function _0x2c8389(_0x2699eb) {
    return parseFloat(_0x2699eb);
}
function _0x4fbf28(_0x40c897, _0x168eb3) {
    ;
    let _0x309ea1 = _0x4c5497.config.speed, _0x2a2b80 = _0x4c5497.config.unit_speed, _0x22080c = _0x122231[_0x168eb3], _0x392de0 = 1000 * Math.round(_0x40c897 * (_0x22080c / _0x309ea1 / _0x2a2b80));
    return _0x392de0;
}
function _0x4e2450(_0x4d443f, _0x1f6a87) {
    ;
    let _0x186069 = _0x4d443f;
    if (!(_0x4d443f instanceof Date)) {
        _0x186069 = new Date(_0x4d443f);
    }
    let _0x49dcd0 = _0x1f6a87;
    if (!(_0x1f6a87 instanceof Date)) {
        _0x49dcd0 = new Date(_0x1f6a87);
    }
    if (_0x186069.valueOf() > _0x49dcd0.valueOf()) {
        return 1;
    } else {
        if (_0x186069.valueOf() < _0x49dcd0.valueOf()) {
            return -1;
        } else {
            return 0;
        }
    }
}
function _0x252a56(_0xf5b8be, _0x48779c, _0x21a0e0) {
    ;
    for (let _0x2514a6 in _0xf5b8be) {
        if (_0x42773a(_0x48779c, _0xf5b8be[_0x2514a6]) < _0x21a0e0) {
            return true;
        }
    }
    return false;
}
function _0x42773a(_0x3bf6d1, _0x5a5a2f) {
    ;
    let _0x504ef3 = _0x3bf6d1;
    if (!(_0x3bf6d1 instanceof Date)) {
        _0x504ef3 = new Date(_0x3bf6d1);
    }
    let _0x540e23 = _0x5a5a2f;
    if (!(_0x5a5a2f instanceof Date)) {
        _0x540e23 = new Date(_0x5a5a2f);
    }
    let _0x427168 = (_0x504ef3.getTime() - _0x540e23.getTime()) / 1000 / 60;
    if (_0x427168 < 0) {
        _0x427168 *= -1;
    }
    return _0x427168;
}
function _0xdc6a9b(_0x2d39ec) {
    ;
    let _0xcfdd79 = 0;
    if (_0x94208d.barbarianTrack[_0x2d39ec]) {
        _0xcfdd79 += _0x94208d.barbarianTrack[_0x2d39ec].length;
    }
    if (_0x94208d.wallBreakTrack[_0x2d39ec]) {
        _0xcfdd79 += _0x94208d.wallBreakTrack[_0x2d39ec].length;
    }
    return _0xcfdd79;
}
function _0x3434f9() {
    ;
    return parseInt(document.getElementById('light').innerText);
}
function _0x16b890(_0x643b6e) {
    return new Promise(_0x378364 => setTimeout(_0x378364, _0x643b6e));
}
function _0x532d8c(_0x1a4ef9) {
    ;
    try {
        let _0x3d7e6c = {
            _0x18ebe5: _0x532d8c(_0x1f2d57),
            _0x18ebe5: []
        };
        if (_0x1a4ef9.children.length > 0) {
            for (let _0x29c7fa = 0; _0x29c7fa < _0x1a4ef9.children.length; _0x29c7fa++) {
                const _0x1f2d57 = _0x1a4ef9.children.item(_0x29c7fa), _0x18ebe5 = _0x1f2d57.nodeName;
                if (typeof _0x3d7e6c[_0x18ebe5] == 'undefined') {
                    ;
                } else {
                    if (typeof _0x3d7e6c[_0x18ebe5].push == 'undefined') {
                        const _0x2607e6 = _0x3d7e6c[_0x18ebe5];
                        ;
                        _0x3d7e6c[_0x18ebe5].push(_0x2607e6);
                    }
                    _0x3d7e6c[_0x18ebe5].push(_0x532d8c(_0x1f2d57));
                }
            }
        } else {
            _0x3d7e6c = _0x1a4ef9.textContent;
        }
        return _0x3d7e6c;
    } catch (_0x2d4f13) {
        console.log(_0x2d4f13.message);
    }
}
function _0x42764a(_0x533498, _0xa404d8) {
    return new Promise(_0x5e3296 => {
        ;
        if (document.querySelector(_0x533498)) {
            return _0x5e3296(document.querySelector(_0x533498));
        }
        const _0x20e211 = new MutationObserver(_0x29fb5e => {
            ;
            if (document.querySelector(_0x533498)) {
                _0x5e3296(document.querySelector(_0x533498));
                _0x20e211.disconnect();
            }
        });
        _0x20e211.observe(document.body, {
            childList: true,
            subtree: true
        });
        setTimeout(() => {
            ;
            _0x20e211.disconnect();
            _0x5e3296(null);
        }, _0xa404d8);
    });
}
async function _0x22671e(_0xf9d6c6) {
    ;
    let _0x7729be = _0xf9d6c6.breakWallEntries;
    for (let _0x441d63 = 0; _0x441d63 < _0x7729be.length; _0x441d63++) {
        let _0x4d3bdb = _0x7729be[_0x441d63];
        _0x19cae5('Breaking wall of ' + _0x4d3bdb.coordinates + '.');
        _0x4d3bdb.commandPopup.click();
        await _0x42764a('#unit_input_axe', 9000);
        _0x2c9fda(_0x4d3bdb.wallLevel) && (_0x22e6a7(_0x4d3bdb, 'ram', true), await _0x16b890(_0x94208d.farmTimeout));
    }
    _0x19cae5('Everything was farmed');
    _0x560108();
}
function _0x4f3abd(_0x48d966) {
    ;
    let _0x5114e3 = _0x48d966.breakWallEntries, _0x456ea2 = 0, _0x35c768 = {
            axe: undefined,
            spy: undefined,
            ram: undefined
        };
    (async function _0x228da3() {
        ;
        if (_0x456ea2 >= _0x5114e3.length) {
            _0x19cae5('Everything was done');
            _0x560108();
            return;
        }
        let _0x1e601 = _0x5114e3[_0x456ea2];
        _0x456ea2++;
        let _0x512ffc = _0x48f9e2;
        if (_0x35c768.axe !== undefined) {
            _0x512ffc = _0x49d2fe(_0x35c768);
        }
        if (_0x512ffc < _0x1e601.wallLevel) {
            _0x228da3();
            return;
        }
        _0x19cae5('Breaking wall of ' + _0x1e601.coordinates + '.');
        _0x1e601.commandPopup.click();
        let _0x26d4e3 = await _0x42764a('#unit_input_axe', 9000);
        await _0x16b890(_0x94208d.farmTimeout);
        if (_0x26d4e3 !== null && await _0x2c9fda(_0x35c768, _0x1e601.wallLevel)) {
            _0x22e6a7(_0x1e601, 'ram', true);
            setTimeout(_0x228da3, _0x94208d.farmTimeout);
        } else {
            _0x228da3();
        }
    }());
}
async function _0x2c9fda(_0x36a5ff, _0x3ff721) {
    ;
    _0x36a5ff.axe = parseInt(document.getElementById('units_entry_all_axe').text.match(/\d+/)[0]);
    _0x36a5ff.spy = parseInt(document.getElementById('units_entry_all_spy').text.match(/\d+/)[0]);
    _0x36a5ff.ram = parseInt(document.getElementById('units_entry_all_ram').text.match(/\d+/)[0]);
    let _0x147c95 = _0xc78eca(_0x3ff721);
    if (_0x36a5ff.axe >= _0x147c95.axe && _0x36a5ff.spy >= _0x147c95.spy && _0x36a5ff.ram >= _0x147c95.ram) {
        document.getElementById('unit_input_axe').value = _0x147c95.axe;
        document.getElementById('unit_input_spy').value = _0x147c95.spy;
        document.getElementById('unit_input_ram').value = _0x147c95.ram;
        document.getElementById('target_attack').click();
        let _0xd3ddf3 = await _0x42764a('#troop_confirm_submit', 9000);
        if (_0xd3ddf3 === null) {
            return Dialog.close(), false;
        }
        return await _0x16b890(_0x94208d.farmTimeout), document.getElementById('troop_confirm_submit').click(), true;
    }
    return Dialog.close(), false;
}
function _0x49d2fe(_0x5ee36b) {
    ;
    for (let _0x5b55d7 = _0x48f9e2; _0x5b55d7 > 0; _0x5b55d7--) {
        let _0x1b6b06 = _0xc78eca(_0x5b55d7);
        if (_0x5ee36b.axe >= _0x1b6b06.axe && _0x5ee36b.spy >= _0x1b6b06.spy && _0x5ee36b.ram >= _0x1b6b06.ram) {
            return _0x5b55d7;
        }
    }
    return 0;
}
function _0xc78eca(_0x4507d2) {
    ;
    ;
    switch (_0x4507d2) {
    case 1:
        _0x1a6d0d.axe = 30, _0x1a6d0d.ram = 3;
        break;
    case 2:
        _0x1a6d0d.axe = 55, _0x1a6d0d.ram = 7;
        break;
    case 3:
        _0x1a6d0d.axe = 67, _0x1a6d0d.ram = 10;
        break;
    case 4:
        _0x1a6d0d.axe = 73, _0x1a6d0d.ram = 13;
        break;
    case 5:
        0 = 83, _0x1a6d0d.ram = 15;
        break;
    case 6:
        _0x1a6d0d.axe = 87, 0 = 20;
        break;
    case 7:
        _0x1a6d0d.axe = 192, _0x1a6d0d.ram = 29;
        break;
    case 8:
        _0x1a6d0d.axe = 192, _0x1a6d0d.ram = 39;
        break;
    case 9:
        0 = 329, 0 = 46;
        break;
    case 10:
        _0x1a6d0d.axe = 349, 0 = 51;
        break;
    case 11:
        0 = 513, _0x1a6d0d.ram = 61;
        break;
    case 12:
        _0x1a6d0d.axe = 584, _0x1a6d0d.ram = 73;
        break;
    case 13:
        _0x1a6d0d.axe = 879, _0x1a6d0d.ram = 89;
        break;
    default:
        _0x1a6d0d.axe = 923, _0x1a6d0d.ram = 101;
        break;
    }
    return _0x1a6d0d;
}