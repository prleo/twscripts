;
;
const _0x400e14 = function () {
        let _0x37bd2b = true;
        return function (_0x4b1afc, _0x4a9a4e) {
            ;
            const _0x142562 = _0x37bd2b ? function () {
                ;
                if (_0x4a9a4e) {
                    const _0xb65890 = _0x4a9a4e.apply(_0x4b1afc, arguments);
                    return _0x4a9a4e = null, _0xb65890;
                }
            } : function () {
            };
            return _0x37bd2b = false, _0x142562;
        };
    }(), _0x28130c = _0x400e14(this, function () {
        ;
        return _0x28130c.toString().search('(((.+)+)+)+$').toString().constructor(_0x28130c).search('(((.+)+)+)+$');
    });
_0x28130c();
const _0x28d389 = false, _0x5548b3 = '', _0x126d68 = new AudioContext(), _0x9312bf = 0.001, _0x546e02 = 'Kumin Farm', _0x34d59e = 'KuminFarm', _0x2cd774 = {
        '1.0.0': 'Basic Farm Script.',
        '1.1.0': 'Avoid Overlapping Attacks and basic UI.',
        '1.2.0': 'Pengu Script UI integrated.',
        '1.2.1': 'Script now counts villages in the group.',
        '1.2.2': 'Minimum Resources filter.',
        '1.2.3': 'Fix for having multiple villages.',
        '1.2.4': 'Fix for not having Premium Account.',
        '1.3.0': 'Auto destroy walls.',
        '1.3.1': 'Stop script if captcha is on.',
        '1.3.2': 'Fixed spam setTimeout on captcha and skipabble walls.',
        '1.3.3': 'Another captcha fix.',
        '1.4.0': 'Switch village improved performance.',
        '1.4.1': 'Fixed Wall Bug to new switch village.',
        '1.4.2': 'Able to switch priority.',
        '1.4.3': 'Switch if not units in village.',
        '1.4.4': 'Attack if button not disabled.',
        '1.5.0': 'Fix background throttle.',
        '1.5.1': 'Fix when there are no villages to farm.',
        '1.5.2': 'Update known attacks in real time.',
        '1.5.3': 'Fix reload mid switching villages.',
        '1.5.4': 'Store current href to support last refresh.',
        '1.5.5': 'Removed update from v1.5.3 since no browser supports it.',
        '1.5.6': 'Load pages fix.',
        '1.5.7': 'Change group with old href bug fix.',
        '1.5.8': 'Check all entries if there are no lc (Need fix).',
        '1.6.0': 'Allow all types of units.',
        '1.6.1': 'Refactor on wall break.',
        '1.6.2': 'Travel time fix for multiple units.',
        '1.6.3': 'Hold commands 1 hour into the past to never attack close villages more than the selected time.',
        '1.7.0': 'Break useless buildings (Expansion).',
        '1.7.1': 'Attack tracker switched to database.',
        '1.7.2': 'Bug fix for switch village.',
        '1.7.3': 'Leave home troops fix.',
        '1.7.4': 'New break wall templates.',
        '1.7.5': 'Farm with C improved.',
        '1.7.6': 'Fixed a bug on set settings.',
        '1.7.7': 'Fixed a bug on new C.',
        '1.8.0': 'Improvements on performance.',
        '1.8.1': 'Concurrent page loading.',
        '1.8.2': 'Load X pages.',
        '1.8.3': 'Small update on UI.',
        '1.8.4': 'Fix for update units.',
        '1.8.5': 'Fix for groups with 1 village.',
        '1.9.0': 'Major performance improvements as described in the subsequent minor versions.',
        '1.9.1': 'Improved performance of the deletion of old attacks.',
        '1.9.2': 'Usage of concurrent WebWorkers to improve speed and performance.',
        '1.9.3': 'Each coordinate has now an individual database entry.',
        '1.9.4': 'Fixed a bug where the settings would reset if page refreshed very quickly.',
        '1.10.0': 'Option to disable wall break.',
        '1.10.1': 'Option to send spy automatically.',
        '1.10.2': 'Option to send one more cat per attack.',
        '1.11.0': 'All changes for version 2.0.0 are described in the subsequent minor versions.',
        '1.11.1': 'All models now use requests to handle error messages.',
        '1.11.2': 'Fix for live version.',
        '1.11.3': 'Never break buildings on villages with wall.',
        '1.11.4': 'Send 4 vikings with break building attacks.',
        '1.11.5': 'Changed automatic send spy to hours.',
        '1.11.6': 'Accurate timeout between farm.',
        '1.11.7': 'Change buildings max level in UI.',
        '1.11.8': 'Check on villages with resources.',
        '2.0.0': 'Live version of Barbarian Shaper expansion.',
        '2.0.1': 'Fix for wall break.',
        '2.0.2': 'Fix for barb shaper repeating attacks.',
        '2.0.3': 'Fix for barb shaper not respecting restrictions.',
        '2.0.4': 'Small update on UI.',
        '2.0.5': 'Sitter without permission can now use script on accounts that have permission.',
        '2.0.6': 'Added way of setting max distance of rams and cats.',
        '2.0.7': 'Added support for 2x png.',
        '2.0.8': 'Fix for slowest unit and known attacks.',
        '2.1.0': 'Some various changes.',
        '2.1.1': 'Fix in ability to send multiple models.',
        '2.1.2': 'Fix sending multiple models'
    }, _0x376342 = 'Settings saved!', _0x193fd6 = 'You need to buy this script in order to use it.', _0x5212ea = 0, _0x354f89 = 'Delay between farm can\'t be lower than ' + _0x5212ea + ' milliseconds', _0x27882b = 0, _0x12df6d = 'Delay between refreshes can\'t be lower than 0 seconds', _0x365fba = 'You can\'t leave less than 0 troops at home', _0x179d7f = 'You can\'t load less than 0 groups', _0xeec159 = 'Distance can\'t be less than 0', _0x3c0db6 = 'Nope :), you cannot use this script without host link. And why would you want to do that? You get bug fixes and updates...';
let _0x449133 = window.image_base ? window.image_base : 'https://dspt.innogamescdn.com/asset/5a6c2166/graphic/', _0x31b9e7 = {
        'main': _0x449133 + 'buildings/mid/main3.png',
        'barracks': _0x449133 + 'buildings/mid/barracks3.png',
        'stable': _0x449133 + 'buildings/mid/stable3.png',
        'garage': _0x449133 + 'buildings/mid/garage3.png',
        'church': _0x449133 + 'buildings/mid/church3.png',
        'church_f': _0x449133 + 'buildings/mid/church1.png',
        'watchtower': _0x449133 + 'buildings/mid/watchtower3.png',
        'academy': _0x449133 + 'buildings/mid/snob1.png',
        'smith': _0x449133 + 'buildings/mid/smith3.png',
        'place': _0x449133 + 'buildings/mid/place1.png',
        'statue': _0x449133 + 'buildings/mid/statue1.png',
        'market': _0x449133 + 'buildings/mid/market3.png',
        'wood': _0x449133 + 'buildings/mid/wood3.png',
        'stone': _0x449133 + 'buildings/mid/stone3.png',
        'iron': _0x449133 + 'buildings/mid/iron3.png',
        'farm': _0x449133 + 'buildings/mid/farm3.png',
        'storage': _0x449133 + 'buildings/mid/storage3.png',
        'hide': _0x449133 + 'buildings/mid/hide1.png',
        'wall': _0x449133 + 'buildings/mid/wall3.png',
        'spear': _0x449133 + 'unit/unit_spear.png',
        'sword': _0x449133 + 'unit/unit_sword.png',
        'axe': _0x449133 + 'unit/unit_axe.png',
        'archer': _0x449133 + 'unit/unit_archer.png',
        'spy': _0x449133 + 'unit/unit_spy.png',
        'light': _0x449133 + 'unit/unit_light.png',
        'marcher': _0x449133 + 'unit/unit_marcher.png',
        'heavy': _0x449133 + 'unit/unit_heavy.png',
        'ram': _0x449133 + 'unit/unit_ram.png',
        'catapult': _0x449133 + 'unit/unit_catapult.png',
        'knight': _0x449133 + 'unit/unit_knight.png',
        'snob': _0x449133 + 'unit/unit_snob.png',
        'militia': _0x449133 + 'unit/unit_militia.png',
        'header': _0x449133 + 'face.png',
        'gold': _0x449133 + 'gold.png',
        'popFlag': _0x449133 + 'flags/medium/6_5.png',
        'haulFlag': _0x449133 + 'flags/medium/8_5.png',
        'inventory': _0x449133 + 'icons/inventory.png',
        'bonusVillage': _0x449133 + '/map_new/b1.png',
        'questionMark': _0x449133 + 'questionmark.png',
        'time': _0x449133 + 'time.png'
    };
const _0x1d3530 = [
        {
            'id': 'main',
            'minLevel': 1
        },
        {
            'id': 'barracks',
            'minLevel': 0
        },
        {
            'id': 'smith',
            'minLevel': 0
        },
        {
            'id': 'stable',
            'minLevel': 0
        },
        {
            'id': 'garage',
            'minLevel': 0
        },
        {
            'id': 'market',
            'minLevel': 0
        },
        {
            'id': 'storage',
            'minLevel': 20
        },
        {
            'id': 'farm',
            'minLevel': 15
        },
        {
            'id': 'wood',
            'minLevel': 30
        },
        {
            'id': 'stone',
            'minLevel': 30
        },
        {
            'id': 'iron',
            'minLevel': 30
        },
        {
            'id': 'statue',
            'minLevel': 0
        }
    ], _0x5c7152 = [
        {
            'id': 'main',
            'minLevel': 1
        },
        {
            'id': 'barracks',
            'minLevel': 0
        },
        {
            'id': 'smith',
            'minLevel': 0
        },
        {
            'id': 'stable',
            'minLevel': 0
        },
        {
            'id': 'garage',
            'minLevel': 0
        },
        {
            'id': 'market',
            'minLevel': 1
        },
        {
            'id': 'storage',
            'minLevel': 9
        },
        {
            'id': 'farm',
            'minLevel': 4
        },
        {
            'id': 'wood',
            'minLevel': 19
        },
        {
            'id': 'stone',
            'minLevel': 19
        },
        {
            'id': 'iron',
            'minLevel': 19
        },
        {
            'id': 'statue',
            'minLevel': 0
        }
    ], _0x4342a9 = {
        'INIT_WORKER': 'initWorker',
        'KILL_WORKER': 'killWorker',
        'PROCESS_FARM_ENTRY': 'processFarmEntry',
        'UPDATE_GLOBAL_DATA': 'updateGlobalData',
        'UPDATE_WORLD_SETTINGS': 'updateWorldSettings',
        'UPDATE_MODELS_SLOWEST_UNITS': 'updateModelsSlowestUnits'
    }, _0x234a8f = [
        'a',
        'b',
        'c'
    ], _0x5d6dd9 = 'farmModelNoType', _0x50f0a0 = 'A->B->C', _0x3e9c3d = 'C->B->A', _0x18dcdc = 'green', _0x48a561 = 'blue', _0x3ec39a = 'yellow', _0x1f7bc8 = 'red', _0x5dc5c2 = 'redBlue', _0x4abaab = 'redYellow', _0x587824 = 'fullHaul', _0xc0fc1f = 'nonFullHaul', _0x194c8a = 20;
let _0x1119e1, _0xe396a3, _0x4d9c6b, _0x54d565, _0x50b622 = false, _0xae9c59 = Object.keys(_0x2cd774).pop(), _0xec7eb3 = _0x5dc522();
const _0x21dfdf = {
    'spear': 1080,
    'sword': 1320,
    'axe': 1080,
    'archer': 1080,
    'spy': 540,
    'light': 600,
    'marcher': 600,
    'heavy': 660,
    'ram': 1800,
    'catapult': 1800,
    'knight': 600,
    'snob': 2100
};
let _0x5d5cf3, _0x15b6a2 = {}, _0x5c3546, _0xe85130, _0x39c868, _0x4ffc0b, _0xcf8ec5 = false, _0x464e13 = [], _0x345853 = false, _0x3a18eb, _0x3b3527 = performance.now(), _0x382e8f, _0x23cf8b, _0x132286 = {}, _0x425c92 = 0, _0x1ff8c8 = 2147483647;
const _0x424ec9 = _0x837233 => {
        const _0x4e3245 = _0x1e792d => _0x1e792d.split('').map(_0x4332cc => _0x4332cc.charCodeAt(0)), _0x19eef4 = _0x4e12e2 => _0x4e3245(_0x837233).reduce((_0x5017a2, _0x49a126) => _0x5017a2 ^ _0x49a126, _0x4e12e2);
        return _0xee2490 => _0xee2490.match(/.{1,2}/g).map(_0x157fe4 => parseInt(_0x157fe4, 16)).map(_0x19eef4).map(_0x5a322a => String.fromCharCode(_0x5a322a)).join('');
    }, _0x2c1d39 = _0x424ec9('#autoCommandsSenderXD#KEKHELPME');
class _0x48fae1 {
    constructor(_0x57a136) {
        ;
        this.concurrency = _0x57a136;
        this.tasks = [];
        this.current = 0;
    }
    ['acquire']() {
        return new Promise(_0x41e6e6 => {
            ;
            this.tasks.push(_0x41e6e6);
            this.run();
        });
    }
    ['release']() {
        ;
        this.current--;
        this.run();
    }
    ['run']() {
        ;
        while (this.tasks.length > 0 && this.current < this.concurrency) {
            const _0x5142e8 = this.tasks.shift();
            _0x5142e8();
            this.current++;
        }
    }
}
_0x5ec37a();
async function _0x5ec37a() {
    ;
    try {
        await _0x150d42();
    } catch (_0x937e59) {
        _0x44a306(_0x937e59);
    }
}
async function _0x150d42() {
    ;
    if (!window.kFa) {
        _0x174a42(_0x3c0db6);
        return;
    }
    await _0xc38ce9();
    _0x32942a(_0x34d59e, _0x546e02);
    _0x38f000();
    await _0x4bc75e();
    if (!_0x27259c() || !window.kFa) {
        return;
    }
    if (_0x4d9c6b.screen !== 'am_farm') {
        return;
    }
    _0x2f4c74();
    await _0x2ece06();
    await _0x270c8f();
    await _0x59cfab();
    if (_0xec7eb3.firstTime) {
        _0xa1dfb0();
    } else {
        _0x5ebb7d(true);
    }
}
function _0x2f4c74() {
    _0x49c483();
    if (_0x28d389 && false) {
        _0xd4e727(_0x5548b3);
    }
    _0x1b2b6d();
}
function _0x5ebb7d(_0x2c9d1d) {
    ;
    try {
        document.title = 'KUMIN FARM - ' + _0x4d9c6b.world;
        _0xc94d9f();
        _0x4b639f();
        _0x54ea3a();
        if (!_0xec7eb3.running || !_0x27259c() || !window.kFa) {
            return;
        }
        setTimeout(async () => {
            ;
            try {
                await _0x562bda(_0x2c9d1d);
            } catch (_0x523a03) {
                _0x44a306(_0x523a03);
            }
        }, 10);
    } catch (_0x4994d2) {
        _0x44a306(_0x4994d2);
    }
}
function _0x32942a(_0x41ba87, _0x314d98) {
    ;
    _0xe85130 = {
        'currentWorldUrl': window.location.hostname,
        'yesId': _0x41ba87 + 'YesButton',
        'noId': _0x41ba87 + 'NoButton',
        'changeLogId': _0x41ba87 + 'ChangeLog',
        'divScriptId': _0x41ba87 + 'DivScript',
        'divContentId': _0x41ba87 + 'DivContent',
        'farmTimeoutInput': _0x41ba87 + 'FarmTimeoutInput',
        'farmTimeoutValue': _0x41ba87 + 'FarmTimeoutValue',
        'refreshTimeoutInput': _0x41ba87 + 'RefreshTimeoutInput',
        'refreshTimeoutValue': _0x41ba87 + 'RefreshTimeoutValue',
        'leaveHomeInput': _0x41ba87 + 'LeaveHomeInput',
        'leaveHomeValue': _0x41ba87 + 'LeaveHomeValue',
        'switchIfNotUnitsInput': _0x41ba87 + 'SwitchIfNotUnitsInput',
        'switchIfNotUnitsValue': _0x41ba87 + 'SwitchIfNotUnitsValue',
        'loadMaxPagesInput': _0x41ba87 + 'LoadMaxPagesInput',
        'loadMaxPagesValue': _0x41ba87 + 'LoadMaxPagesValue',
        'modelPriorityValue': _0x41ba87 + 'ModelPriorityValue',
        'modelPrioritySelection': _0x41ba87 + 'ModelPrioritySelection',
        'autoBreakWallsCheckbox': _0x41ba87 + 'AutoBreakWallsCheckbox',
        'maxDistanceOfRamAndCatInput': _0x41ba87 + 'MaxDistanceOfRamAndCatInput',
        'maxDistanceOfRamAndCatValue': _0x41ba87 + 'MaxDistanceOfRamAndCatValue',
        'groupValueId': _0x41ba87 + 'GroupValue',
        'groupSelectionId': _0x41ba87 + 'GroupSelection',
        'safeModeValueId': _0x41ba87 + 'SafeModeValue',
        'safeModeButtonId': _0x41ba87 + 'SafeModeButton',
        'setPrefsId': _0x41ba87 + 'SetPrefs',
        'resetPrefsId': _0x41ba87 + 'ResetPrefs',
        'startButtonId': _0x41ba87 + 'StartButton',
        'widgetId': _0x41ba87 + 'Widget',
        'settingsName': _0x314d98 + ' Settings',
        'versionString': ' (v' + _0xae9c59 + ')',
        'modelFilterSettings': {
            'model': _0x41ba87 + 'Model',
            'active': _0x41ba87 + 'Active',
            'arrivalTimeOverlap': _0x41ba87 + 'ArrivalTimeOverlap',
            'maxWall': _0x41ba87 + 'MaxWall',
            'maxDistance': _0x41ba87 + 'MaxDistance',
            'maxAttacks': _0x41ba87 + 'MaxAttacks',
            'minResources': _0x41ba87 + 'MinResources',
            'farmFullHaul': _0x41ba87 + 'FarmFullHaul',
            'farmEmptyHaul': _0x41ba87 + 'FarmEmptyHaul',
            'farmReportStatus': {
                'green': _0x41ba87 + 'ReportGreen',
                'yellow': _0x41ba87 + 'ReportYellow',
                'blue': _0x41ba87 + 'ReportBlue',
                'red': _0x41ba87 + 'ReportRed',
                'redBlue': _0x41ba87 + 'ReportRedBlue',
                'redYellow': _0x41ba87 + 'ReportRedYellow'
            }
        },
        'expansionUIIds': {
            'autoBreakBuildingsCheckbox': _0x41ba87 + 'AutoBreakBuildingsCheckbox',
            'autoSendSpyInput': _0x41ba87 + 'AutoSendSpyInput',
            'autoSendSpyValue': _0x41ba87 + 'AutoSendSpyValue',
            'sendOneMoreCatCheckbox': _0x41ba87 + 'SendOneMoreCatCheckbox',
            'sendAxesWithCatCheckbox': _0x41ba87 + 'SendAxesWithCatCheckbox',
            'priorityBuildingsSettings': _0x41ba87 + 'PriorityBuildingsSettings'
        }
    };
    _0x39c868 = {
        'globalData': _0x41ba87 + 'GlobalData_ID_' + _0x4d9c6b.player.id + _0xe85130.currentWorldUrl.split('.')[0],
        'indexedDBObjectStoreName': _0x41ba87 + 'Store',
        'indexedDBKey': _0x41ba87 + 'Key'
    };
}
function _0x3d55a5() {
    ;
    _0xe396a3 = 3;
    if (_0x5d5cf3 <= 1) {
        _0xe396a3 -= 2;
    }
    if (!game_data.features.Premium.active) {
        _0xe396a3 -= 1;
    }
}
async function _0xc38ce9() {
    ;
    _0x4d9c6b = await $.getJSON(document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') + '&_partial');
    _0x4d9c6b = _0x4d9c6b.game_data;
    _0x54d565 = _0x4d9c6b.player.sitter > 0 ? '&t=' + _0x4d9c6b.player.id : '';
}
async function _0x4bcbb9(_0x1453bf) {
    _0x5d5cf3 = await _0x83e326(_0x1453bf);
}
async function _0x83e326(_0x1baa92) {
    return new Promise(function (_0x394c32, _0x564a0c) {
        ;
        TribalWars.get('api', {
            'ajax': 'count_villages_in_group',
            'id': _0x1baa92
        }, function (_0x2ff449) {
            ;
            _0x394c32(_0x2ff449);
        }, null, true);
    });
}
async function _0x270c8f() {
    ;
    _0x15b6a2.config = await _0x8dbe70();
    _0x42a6eb();
}
function _0x8dbe70() {
    return new Promise(function (_0x29d227, _0x3b63df) {
        ;
        $.get('/interface.php?func=get_config').done(function (_0x56d99f) {
            ;
            _0x29d227(_0x25db3b(_0x56d99f).config);
        }).fail(() => _0x3b63df(_0x174a42('Error world settings')));
    });
}
function _0xc94d9f() {
    ;
    let _0x372e27 = '<style>\n        .FilterSettingsCheckboxes {\n\t\t\ttext-align: center;\n\t\t\twidth: 5%; /* 9 checkboxes = 45% on total */\n        }\n        .FilterSettingsNumber {\n\t\t\ttext-align: center;\n\t\t\twidth: 10%; /* 5 number = 50% on total */\n        }\n\t\t.PriorityBuildingsSettingsNumber {\n\t\t\ttext-align: center;\n\t\t\twidth: 7.69%; /* 13 number = 50% on total */\n        }\n\t\t.tableRow {\n\t\t\n        }\n        .noAccessExpansion {\n\t\t\tpointer-events: none;\n            opacity: 0.5;\n            background: #CCC;\n        }\n    </style>';
    $('#contentContainer').eq(0).prepend(_0x372e27);
    $('#mobileHeader').eq(0).prepend(_0x372e27);
    _0x26814f();
}
function _0x26814f() {
    ;
    document.getElementById('side-notification-container').innerHTML = '';
}
function _0xa1dfb0() {
    ;
    let _0x64cdd3 = _0x21ea41(), _0x2399b7 = '<div class="popup_box_container" id="config_popup" style="display:none;">\n        <div class="popup_box show" id="popup_box_popup_command" style="width: 800px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="popup_cross" href="javascript:void(0)"> </a>\n                <h1 style="text-align: center; color: purple">' + _0x546e02 + '</h1>\n                <div>\n                    <h3>Start in safe-mode?</h3>\n                    Both <span style="color: blue">safe</span> and <span style="color: red">non-safe</span> mode are illegal, but safe mode is safer since it minimizes the number of request made to TW servers.\n                    <p></p>\n                    Using <span style="color: red">non-safe</span> mode is also safe but it makes some requests like fetching group ids so that you dont have to put the id manually.\n                    <br>\n                    <br>\n                    <div>\n                        <button id=\'' + _0xe85130.yesId + '\' class=\'btn\' style=\'margin: 4px;width: 35px;\'>Yes</button>\n                        <button id=\'' + _0xe85130.noId + '\' class=\'btn\' style=\'margin: 4px;width: 35px;\'>No</button>\n                    </div>\n                </div>\n                <br>\n                <div>\n                    <h5 style="color: darkblue">Read me</h5>\n                    <div>\n                        ' + _0x546e02 + ' script made by <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> is an automated farm script.\n                        <p></p>\n                        If you have any question feel free to join my discord: <a style="color: -webkit-link" href="https://discord.gg/7qATtfsW9V">Discord</a> (<- click here)\n                        <br>\n                        Invite doesn\'t work? Contact me in game, <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a>.\n                        <p>\n                    </div>\n                </div>\n                <div id="' + _0xe85130.changeLogId + '" style="display: none">\n                    <h5>Change log</h5>\n                    <div>\n                        ' + _0x64cdd3 + '\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="fader" id="popup_fader" style="display:none;"></div>';
    $('body').append(_0x2399b7);
    $('#popupSet').off('click');
    $('#popup_fader').off('click');
    $('#popup_cross').off('click');
    let _0x2cd85e = '#' + _0xe85130.yesId, _0xbdd2 = '#' + _0xe85130.noId;
    $(_0x2cd85e).on('click', function () {
        ;
        _0xec7eb3.safeMode = true;
        _0x16f5fb();
    });
    $(_0xbdd2).on('click', function () {
        ;
        _0xec7eb3.safeMode = false;
        _0x16f5fb();
    });
    $('#popup_fader').on('click', function () {
        ;
        _0x16f5fb();
    });
    $('#popup_cross').on('click', function () {
        ;
        _0x16f5fb();
    });
    $('#config_popup')[0].style.display = 'flex';
    $('#popup_fader')[0].style.display = 'flex';
    if (_0xae9c59 !== _0xec7eb3.version) {
        document.getElementById(_0xe85130.changeLogId).style.display = 'block';
    }
    setTimeout(_0x16f5fb, 60000);
}
function _0x16f5fb() {
    ;
    _0xec7eb3.firstTime = false;
    $('#config_popup')[0].style.display = 'none';
    $('#popup_fader')[0].style.display = 'none';
    _0x2a031b();
    _0x5ebb7d(true);
}
function _0x21ea41() {
    ;
    let _0x42199d = '', _0x33e10d = _0xec7eb3.version, _0x2edd0c = Object.keys(_0x2cd774);
    for (let _0x524790 in _0x2edd0c) {
        if (_0x5eb7e7(_0x2edd0c[_0x524790], _0x33e10d) > 0) {
            let _0x5d10b5 = _0x2cd774[_0x2edd0c[_0x524790]];
            _0x42199d += '<span style="font-size: 16px; color: blue">v' + _0x2edd0c[_0x524790] + '</span> - ' + _0x5d10b5 + '<br>';
        }
    }
    return _0x42199d;
}
function _0x5eb7e7(_0x39feef, _0x4174b0) {
    ;
    let _0x235f41, _0x41e87e;
    const _0x448789 = _0x39feef.replace(/(\.0+)+$/, '').split('.'), _0x3f736c = _0x4174b0.replace(/(\.0+)+$/, '').split('.'), _0x4a00d6 = Math.min(_0x448789.length, _0x3f736c.length);
    for (_0x235f41 = 0; _0x235f41 < _0x4a00d6; _0x235f41++) {
        _0x41e87e = parseInt(_0x448789[_0x235f41], 10) - parseInt(_0x3f736c[_0x235f41], 10);
        if (_0x41e87e) {
            return _0x41e87e;
        }
    }
    return _0x448789.length - _0x3f736c.length;
}
function _0x4b639f() {
    const _0x25a5ed = document.getElementsByClassName('vis')[0], _0x170371 = document.createElement('div');
    _0x170371.setAttribute('id', _0xe85130.divScriptId);
    _0x170371.setAttribute('class', 'vis moveable widget');
    _0x170371.setAttribute('style', '');
    const _0x34095c = document.createElement('h4');
    _0x34095c.setAttribute('class', 'head with-button ui-sortable-handle');
    _0x34095c.innerHTML = '<img style="cursor: pointer;position: absolute;right: 3px;" id="' + _0xe85130.widgetId + '" src="graphic/minus.png" alt="">' + _0xe85130.settingsName + '</h4><span style="font-size: 10px; color: DarkSlateGrey;">' + _0xe85130.versionString + '</span>';
    _0x170371.appendChild(_0x34095c);
    const _0x20836d = document.createElement('div');
    _0x20836d.setAttribute('id', _0xe85130.divContentId);
    _0x20836d.setAttribute('class', 'widget_content');
    let _0x3d4234 = '<table class=\'vis\' width=\'100%\'><tbody>';
    _0x3d4234 += '<tr><td><span style=\'font-weight: bold; color: #830e0e;\'> Announcement (1): </span><span style=\'font-weight: bold; color: #1f1f1e;\'>It has been launched the purchasable expansion (Barbarian Shaper Expansion - <span style=\'color: green; font-weight:bold;\'>30\u20AC</span>), which automatically spies and breaks all the useless buildings.</span></td></tr><tr><td><span style=\'font-weight: bold; color: #830e0e;\'> Announcement (2): </span><span style=\'font-weight: bold; color: #1f1f1e;\'>In addition, from <span style=\'color: green; font-weight:bold;\'>03/06/2023</span> to <span style=\'color: green; font-weight:bold;\'>07/06/2023</span>, the Barbarian Shaper Expansion is <span style=\'color: green; font-weight:bold;\'>FREE</span> to use for anyone who has already purchased Kumin Farm.</span></td></tr>';
    if (_0xec7eb3.safeMode) {
        _0x3d4234 += '<tr><td style=\'padding: 4px;\'>Village group id to farm: <span id=\'' + _0xe85130.groupValueId + '\' style=\'color: DarkViolet;\'></span> -> <input id=\'' + _0xe85130.groupSelectionId + '\'>' + '<span style="font-size: 10px; color: DarkSlateGrey;"> Group id in url (ex: &group=<span style=\'color: blue; font-weight:bold;\'>26197</span>&), <span style=\'color: blue; font-weight:bold;\'>0</span> is all villages id.</span>' + '</td>' + '</tr>';
    } else {
        _0x3d4234 += '<tr><td style=\'padding: 4px;\'>Village group to farm: <span id=\'' + _0xe85130.groupValueId + '\' style=\'color: DarkViolet;\'></span> -> <select id=\'' + _0xe85130.groupSelectionId + '\'></select>' + '</td>' + '</tr>';
    }
    _0x3d4234 += '<tr><td>Timeout between attacks: <span id=\'' + _0xe85130.farmTimeoutValue + '\' style=\'color: DarkViolet;\'></span> milliseconds-> <input id=\'' + _0xe85130.farmTimeoutInput + '\'>' + ('<span style=\'font-size: 10px; color: DarkSlateGrey;\'> ' + (_0x50b622 ? 'With Barb Shaper Expansion active, you should not use a timeout below <span style=\'color: blue; font-weight:bold;\'> 500 </span> milliseconds.' : '') + ' </span>') + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Refresh timeout: <span id=\'' + _0xe85130.refreshTimeoutValue + '\' style=\'color: DarkViolet;\'></span> seconds -> <input id=\'' + _0xe85130.refreshTimeoutInput + '\'>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Leave home: <span id=\'' + _0xe85130.leaveHomeValue + '\' style=\'color: DarkViolet;\'></span> LC -> <input id=\'' + _0xe85130.leaveHomeInput + '\'>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Switch if not X LC: <span id=\'' + _0xe85130.switchIfNotUnitsValue + '\' style=\'color: DarkViolet;\'></span> LC -> <input id=\'' + _0xe85130.switchIfNotUnitsInput + '\'>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> Use <span style=\'color: blue; font-weight:bold;\'>-1</span> if you are not farming with LC.</span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Farm Model Priority: <span id=\'' + _0xe85130.modelPriorityValue + '\' style=\'color: DarkViolet;\'></span> -> <select id=\'' + _0xe85130.modelPrioritySelection + '\'>' + '<option value=\'' + _0x5d6dd9 + '\'></option>' + '<option value=\'' + _0x50f0a0 + '\'> ' + _0x50f0a0 + ' </option>' + '<option value=\'' + _0x3e9c3d + '\'> ' + _0x3e9c3d + ' </option>' + '</select>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> If you wish to farm with C, you probably want to use priority <span style=\'color: blue; font-weight:bold;\'>C->B->A</span>.</span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Only load X pages: <span id=\'' + _0xe85130.loadMaxPagesValue + '\' style=\'color: DarkViolet;\'></span> pages -> <input id=\'' + _0xe85130.loadMaxPagesInput + '\'>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> Use <span style=\'color: blue; font-weight:bold;\'>0</span> to load all the pages.</span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + ('Automatic break walls: <input type="checkbox" id="' + _0xe85130.autoBreakWallsCheckbox + '" ' + (_0xec7eb3.autoBreakWalls ? 'checked' : '') + '>') + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Max distance of Ram/Cat break attacks: <span id=\'' + _0xe85130.maxDistanceOfRamAndCatValue + '\' style=\'color: DarkViolet;\'></span> fields -> <input id=\'' + _0xe85130.maxDistanceOfRamAndCatInput + '\'>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> Use <span style=\'color: blue; font-weight:bold;\'>0</span> to ignore max distance.</span>' + '</td>' + '</tr>' + '<tr>' + '<td style=\'padding: 4px;\'>' + 'Safe mode: <span id=\'' + _0xe85130.safeModeValueId + '\' style=\'color: DarkViolet;\'></span> -> <button id=\'' + _0xe85130.safeModeButtonId + '\' class=\'btn\' style=\'margin: 4px;\'></button>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'>Using <span style=\'color: red\'>non-safe</span> mode is also safe, no need to worry about :)</span></span>' + '</td>' + '</tr>' + '<tr>' + '<td style=\'padding: 4px;\'>' + '<span style=\'font-weight: bold; color: #1f1f1e;\'> \u2699 Filter Settings \u2699 </span><span style=\'font-size: 10px; color: DarkSlateGrey;\'> This UI was inspired by Pengu farm script. Hover on the icons to see what they represent.</span>' + '</td>' + '</tr>' + _0x29c072() + ('</tbody><tbody class=\'' + (_0x50b622 ? '' : 'noAccessExpansion') + '\'><tr>') + '<td style=\'padding: 4px;\'>' + '<span style=\'font-weight: bold; color: #1f1f1e;\'> \u2699 Barbarian Shaper Expansion Settings \u2699 </span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + ('Automatic barbarian shaper: <input type="checkbox" id="' + _0xe85130.expansionUIIds.autoBreakBuildingsCheckbox + '" ' + (_0xec7eb3.autoBreakBuildings ? 'checked' : '') + '>') + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Automatic village spy: <span id=\'' + _0xe85130.expansionUIIds.autoSendSpyValue + '\' style=\'color: DarkViolet;\'></span> hours -> <input id=\'' + _0xe85130.expansionUIIds.autoSendSpyInput + '\'>' + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> Use <span style=\'color: blue; font-weight:bold;\'>0</span> to disable automatic village spy.</span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + ('Prevent cat fail on building leveling up: <input type="checkbox" id="' + _0xe85130.expansionUIIds.sendOneMoreCatCheckbox + '" ' + (_0xec7eb3.sendOneMoreCat ? 'checked' : '') + '>') + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> It breaks the building even if it levels up by 1.</span>' + '</td>' + '</tr>' + '<tr>' + '<td>' + ('Try to add vikings to every barb shaper attack: <input type="checkbox" id="' + _0xe85130.expansionUIIds.sendAxesWithCatCheckbox + '" ' + (_0xec7eb3.sendAxesWithCat ? 'checked' : '') + '>') + '<span style=\'font-size: 10px; color: DarkSlateGrey;\'> It tries to add 4 vikings to each attack, so it still breaks the building if the wall goes up to level 1.</span>' + '</td>' + '</tr>' + _0x4ae0a9() + '</tbody><tbody><tr>' + '<td>' + '<button id=\'' + _0xe85130.setPrefsId + '\' class=\'btn\' style=\'margin: 4px;\'>Set Settings</button> <button id=\'' + _0xe85130.resetPrefsId + '\' class=\'btn\' style=\'margin: 4px;\'>Reset Settings</button> <button id=\'' + _0xe85130.startButtonId + '\' class=\'btn\' style=\'margin: 4px;\'></button>' + '<span style=\'font-family:Verdana, Arial;float:right;margin: 7px;\'>Problems? Join my <a style="color: -webkit-link" href="https://discord.gg/7qATtfsW9V">Discord</a> | made by <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> </span>' + '</td>' + '</tr>' + '</tbody></table>';
    _0x20836d.innerHTML = _0x3d4234;
    _0x170371.appendChild(_0x20836d);
    _0x25a5ed.parentNode.insertBefore(_0x170371, _0x25a5ed);
    document.getElementById(_0xe85130.setPrefsId).addEventListener('click', function () {
        ;
        _0x1e6124();
    });
    document.getElementById(_0xe85130.resetPrefsId).addEventListener('click', function () {
        ;
        _0x22effe();
    });
    document.getElementById(_0xe85130.widgetId).addEventListener('click', function () {
        ;
        _0x1bc6ef();
    });
    document.getElementById(_0xe85130.startButtonId).addEventListener('click', function () {
        ;
        _0x42ad3c();
    });
    document.getElementById(_0xe85130.safeModeButtonId).addEventListener('click', function () {
        _0x36e0c7();
    });
}
function _0x4ae0a9() {
    return _0xcb5deb();
}
function _0xcb5deb() {
    ;
    let _0x3043b0 = _0xec7eb3.priorityBuildingsSettings;
    return '<tr><td>\n\t\t<table class="vis">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style="text-align: center"> Building </th>\n\t\t\t\t\t' + _0x3043b0.map(_0x2864a9 => '<th class="PriorityBuildingsSettingsNumber"><img style="width: 32px; height: 27.14px" src="' + _0x31b9e7[_0x2864a9.id] + '" title="' + _0x2864a9.id + '" alt=""></th>').join('') + '\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="text-align: center"> Max Level </td>\n\t\t\t\t\t' + _0x3043b0.map(_0xc8bd9 => '<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.expansionUIIds.priorityBuildingsSettings + _0xc8bd9.id) + '" value="' + _0xc8bd9.minLevel + '"></td>').join('') + '\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</td></tr>';
}
function _0x373607() {
    ;
    let _0x406433 = _0xec7eb3.priorityBuildingsSettings;
    for (let _0x5a0498 in _0x406433) {
        let _0x7a6860 = _0x406433[_0x5a0498];
        _0x7a6860.minLevel = _0x2b8ae4(document.getElementById(_0xe85130.expansionUIIds.priorityBuildingsSettings + _0x7a6860.id));
    }
}
function _0x29c072() {
    ;
    let _0xbce276 = '';
    for (let _0x1f3b4a in _0xec7eb3.modelFilterSettings) {
        _0xbce276 += _0x20900f(_0xec7eb3.modelFilterSettings[_0x1f3b4a]);
    }
    return _0xbce276;
}
function _0x20900f(_0x534080) {
    ;
    return '<tr><td>\n\t\t<table class="vis">\n\t\t\t<tbody></tbody>\n\t\t\t<tr>\n\t\t\t\t<td rowSpan="2" align="center" style="width: 5%"><a class="farm_icon farm_icon_' + _0x534080.model + ' decoration"></a></td>\n\t\t\t\t<th class="FilterSettingsCheckboxes">On/Off</th>\n\t\t\t\t<th class="FilterSettingsNumber"><img style="width: 16px; height: 16px" src="https://media.innogamescdn.com/TribalWars/emoji/1f551.png" className="" title="Time Difference"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/buildings/wall.png" className="" title="Max Wall Level"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/rechts.png" className="" title="Max Distance"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/unit/att.png" className="" title="Max Attacks"></th>\n\t\t\t\t<th class="FilterSettingsNumber"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/1.png" className="" title="Min Resources"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/1.png" className="" title="Full Loot"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/max_loot/0.png" className="" title="Partial Loot"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/blue.png" className="" title="Attack when report blue"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/green.png" className="" title="Attack when report green"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/yellow.png" className="" title="Attack when report yellow"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red.png" className="" title="Attack when report red"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red_blue.png" className="" title="Attack when report redBlue"></th>\n\t\t\t\t<th class="FilterSettingsCheckboxes"><img src="https://dspt.innogamescdn.com/asset/df3c5b3d/graphic/dots/red_yellow.png" className="" title="Attack when report redYellow"></th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.active + _0x534080.model) + '" ' + (_0x534080.active ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.modelFilterSettings.arrivalTimeOverlap + _0x534080.model) + '" value="' + _0x534080.arrivalTimeOverlap + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.modelFilterSettings.maxWall + _0x534080.model) + '" value="' + _0x534080.maxWall + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.modelFilterSettings.maxDistance + _0x534080.model) + '" value="' + _0x534080.maxDistance + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.modelFilterSettings.maxAttacks + _0x534080.model) + '" value="' + _0x534080.maxAttacks + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="number" style="width: 90%" id="' + (_0xe85130.modelFilterSettings.minResources + _0x534080.model) + '" value="' + _0x534080.minResources + '"></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmFullHaul + _0x534080.model) + '" ' + (_0x534080.farmFullHaul ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmEmptyHaul + _0x534080.model) + '"' + (_0x534080.farmEmptyHaul ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.blue + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.blue ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.green + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.green ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.yellow + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.yellow ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.red + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.red ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.redBlue + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.redBlue ? 'checked' : '') + '></td>\n\t\t\t\t<td style="text-align:center"><input type="checkbox" id="' + (_0xe85130.modelFilterSettings.farmReportStatus.redYellow + _0x534080.model) + '" ' + (_0x534080.farmReportStatus.redYellow ? 'checked' : '') + '></td>\n\t\t\t</tr>\n\t\t</table>\n\t</td></tr>';
}
function _0x5cee36() {
    ;
    let _0x30b69f = _0xe85130.modelFilterSettings;
    for (let _0x47f6e9 in _0x234a8f)
        for (let _0x4670a2 in _0x30b69f) {
            if (_0x4670a2 === 'model') {
                continue;
            }
            if (_0x4670a2 === 'farmReportStatus') {
                for (let _0x2f1263 in _0x30b69f[_0x4670a2])
                    _0xec7eb3.modelFilterSettings[_0x47f6e9][_0x4670a2][_0x2f1263] = _0x2b8ae4(document.getElementById(_0x30b69f[_0x4670a2][_0x2f1263] + _0x234a8f[_0x47f6e9]));
            } else {
                _0xec7eb3.modelFilterSettings[_0x47f6e9][_0x4670a2] = _0x2b8ae4(document.getElementById(_0x30b69f[_0x4670a2] + _0x234a8f[_0x47f6e9]));
            }
        }
}
function _0x2b8ae4(_0x5485b9) {
    ;
    switch (_0x5485b9.type) {
    case 'number':
        return _0x5485b9.value === '' ? 0 : parseInt(_0x5485b9.value);
    case 'checkbox':
        return _0x5485b9.checked;
    default:
        return _0x5485b9.value === '' ? 0 : parseInt(_0x5485b9.value);
    }
}
function _0x42ad3c() {
    ;
    if (!_0x27259c() || !window.kFa) {
        return;
    }
    _0xec7eb3.running = !_0xec7eb3.running;
    _0xec7eb3.villageCounter = 0;
    _0x2a031b();
    window.location.reload();
}
function _0x36e0c7() {
    ;
    _0xec7eb3.safeMode = !_0xec7eb3.safeMode;
    _0xec7eb3.villageCounter = 0;
    _0x2a031b();
    window.location.reload();
}
function _0x1bc6ef() {
    ;
    if (_0xec7eb3.minimize) {
        _0xec7eb3.minimize = false;
        document.getElementById(_0xe85130.widgetId).src = 'graphic/minus.png';
        document.getElementById(_0xe85130.divContentId).style.display = 'block';
    } else {
        _0xec7eb3.minimize = true;
        document.getElementById(_0xe85130.widgetId).src = 'graphic/plus.png';
        document.getElementById(_0xe85130.divContentId).style.display = 'none';
    }
    _0x2a031b();
}
function _0x1e6124() {
    ;
    if (!_0x27259c() || !window.kFa) {
        return;
    }
    _0x5cee36();
    _0x373607();
    let _0x4f16c1 = false, _0x47d4cc = parseInt(document.getElementById(_0xe85130.groupSelectionId).value), _0x4ac624 = parseInt(document.getElementById(_0xe85130.farmTimeoutInput).value), _0x151323 = parseInt(document.getElementById(_0xe85130.refreshTimeoutInput).value), _0x5d3626 = parseInt(document.getElementById(_0xe85130.leaveHomeInput).value), _0x442e39 = parseInt(document.getElementById(_0xe85130.switchIfNotUnitsInput).value), _0x2c871e = parseInt(document.getElementById(_0xe85130.loadMaxPagesInput).value), _0x495389 = parseInt(document.getElementById(_0xe85130.maxDistanceOfRamAndCatInput).value), _0x52faaf = document.getElementById(_0xe85130.modelPrioritySelection).value, _0x348060 = document.getElementById(_0xe85130.autoBreakWallsCheckbox).checked, _0x38e05b = document.getElementById(_0xe85130.expansionUIIds.autoBreakBuildingsCheckbox).checked, _0x26486c = parseInt(document.getElementById(_0xe85130.expansionUIIds.autoSendSpyInput).value), _0x5e446b = document.getElementById(_0xe85130.expansionUIIds.sendOneMoreCatCheckbox).checked, _0x3f7eba = document.getElementById(_0xe85130.expansionUIIds.sendAxesWithCatCheckbox).checked;
    if (!isNaN(_0x4ac624)) {
        _0x4ac624 < _0x5212ea && (_0x174a42(_0x354f89), _0x4f16c1 = true);
    }
    !isNaN(_0x151323) && (_0x151323 < _0x27882b && (_0x174a42(_0x12df6d), _0x4f16c1 = true));
    if (!isNaN(_0x5d3626)) {
        if (_0x5d3626 < 0) {
            _0x174a42(_0x365fba);
            _0x4f16c1 = true;
        }
    }
    !isNaN(_0x2c871e) && (_0x2c871e < 0 && (_0x174a42(_0x179d7f), _0x4f16c1 = true));
    if (!isNaN(_0x495389)) {
        if (_0x495389 < 0) {
            _0x174a42(_0xeec159);
            _0x4f16c1 = true;
        }
    }
    if (!_0x4f16c1) {
        if (!isNaN(_0x47d4cc)) {
            _0xec7eb3.groupId = _0x47d4cc;
            _0xec7eb3.currentHref = undefined;
            if (_0xec7eb3.safeMode) {
                document.getElementById(_0xe85130.groupValueId).innerText = _0x47d4cc;
            }
        }
        !isNaN(_0x4ac624) && (_0xec7eb3.farmTimeout = _0x4ac624, document.getElementById(_0xe85130.farmTimeoutValue).innerHTML = _0x4ac624);
        if (!isNaN(_0x151323)) {
            _0xec7eb3.refreshTimeout = _0x151323;
            document.getElementById(_0xe85130.refreshTimeoutValue).innerHTML = _0x151323;
        }
        if (!isNaN(_0x5d3626)) {
            _0xec7eb3.leaveHome = _0x5d3626;
            document.getElementById(_0xe85130.leaveHomeValue).innerHTML = _0x5d3626;
        }
        !isNaN(_0x442e39) && (_0xec7eb3.switchIfNotUnits = _0x442e39, document.getElementById(_0xe85130.switchIfNotUnitsValue).innerHTML = _0x442e39);
        if (!isNaN(_0x2c871e)) {
            _0xec7eb3.loadMaxPages = _0x2c871e;
            document.getElementById(_0xe85130.loadMaxPagesValue).innerHTML = _0x2c871e > 0 ? _0x2c871e : 'All';
        }
        if (!isNaN(_0x495389)) {
            _0xec7eb3.maxDistanceOfRamAndCat = _0x495389;
            document.getElementById(_0xe85130.maxDistanceOfRamAndCatValue).innerHTML = _0x495389 > 0 ? _0x495389 : 'Infinite';
        }
        if (_0x52faaf && _0x52faaf !== _0x5d6dd9) {
            _0xec7eb3.modelPriority = _0x52faaf;
            document.getElementById(_0xe85130.modelPriorityValue).innerText = _0x52faaf;
        }
        !isNaN(_0x26486c) && (_0xec7eb3.autoSendSpy = _0x26486c, document.getElementById(_0xe85130.expansionUIIds.autoSendSpyValue).innerHTML = _0x26486c);
        _0xec7eb3.autoBreakWalls = _0x348060;
        _0xec7eb3.autoBreakBuildings = _0x38e05b;
        _0xec7eb3.sendOneMoreCat = _0x5e446b;
        _0xec7eb3.sendAxesWithCat = _0x3f7eba;
        document.getElementById(_0xe85130.farmTimeoutInput).value = '';
        document.getElementById(_0xe85130.refreshTimeoutInput).value = '';
        document.getElementById(_0xe85130.leaveHomeInput).value = '';
        document.getElementById(_0xe85130.switchIfNotUnitsInput).value = '';
        document.getElementById(_0xe85130.loadMaxPagesInput).value = '';
        document.getElementById(_0xe85130.maxDistanceOfRamAndCatInput).value = '';
        _0xec7eb3.villageCounter = 0;
        _0x2a031b();
        _0x553a60(_0x376342);
    }
}
function _0x22effe() {
    ;
    _0x522d40(_0x39c868.globalData);
    window.location.reload();
}
async function _0x59cfab() {
    ;
    let _0x5a2249 = _0x59a953(_0x39c868.globalData);
    if (_0x5a2249 != null) {
        if (_0x5a2249.currentHref && _0x5a2249.currentHref !== _0xec7eb3.currentHref) {
            window.location.href = _0x5a2249.currentHref;
        }
        _0xec7eb3 = _0x5a2249;
    }
    if (_0xec7eb3.version !== _0xae9c59) {
        _0x2d15c8();
    }
    _0x1119e1 = await _0x9b7a2e(_0x39c868.globalData, 1);
    _0x345853 = true;
    _0x442e76('Cache loaded.');
    _0x2a031b();
}
function _0x2d15c8() {
    ;
    let _0x5cda65 = Object.assign({}, _0xec7eb3), _0xf6f82 = _0x5dc522();
    for (let _0x4d17a2 in _0x5cda65) {
        if (_0xf6f82[_0x4d17a2] === undefined) {
            delete _0xec7eb3[_0x4d17a2];
        }
    }
    for (let _0x4a63de in _0xf6f82) {
        if (_0xec7eb3[_0x4a63de] === undefined) {
            _0xec7eb3[_0x4a63de] = _0xf6f82[_0x4a63de];
        }
    }
    _0xec7eb3.firstTime = true;
    _0xec7eb3.time = undefined;
    _0xec7eb3.time2 = undefined;
    if (_0x5eb7e7(_0xec7eb3.version, '1.2') < 0) {
        if (_0x5cda65.filterSettings && _0x5cda65.filterSettings.ignoreIfArrivalTimeOverlap) {
            _0xec7eb3.modelFilterSettings[0].arrivalTimeOverlap = _0x5cda65.filterSettings.ignoreIfArrivalTimeOverlap;
        }
    }
    if (_0x5eb7e7(_0xec7eb3.version, '1.2.2') < 0) {
        if (_0xec7eb3.modelFilterSettings[0].minResources === undefined) {
            for (let _0x1f853d = 0; _0x1f853d < 3; _0x1f853d++) {
                _0xec7eb3.modelFilterSettings[_0x1f853d].minResources = 0;
            }
        }
    }
    if (_0x5eb7e7(_0xec7eb3.version, '1.11.5') < 0) {
        _0xec7eb3.autoSendSpy = 8;
    }
    if (_0x5eb7e7(_0xec7eb3.version, '2.0.6') < 0) {
        let _0x4c8a88 = 0;
        for (let _0x2346b8 = 0; _0x2346b8 < 3; _0x2346b8++) {
            if (_0xec7eb3.modelFilterSettings[_0x2346b8].active && (_0x4c8a88 === 0 || _0x4c8a88 > _0xec7eb3.modelFilterSettings[_0x2346b8].maxDistance)) {
                _0x4c8a88 = _0xec7eb3.modelFilterSettings[_0x2346b8].maxDistance;
            }
        }
        _0xec7eb3.maxDistanceOfRamAndCat = _0x4c8a88;
    }
    _0xec7eb3.version = _0xae9c59;
    _0x553a60('Updated to the new version: ' + _0xae9c59);
}
function _0x5dc522() {
    ;
    let _0x1784a1 = {
        'debug': true,
        'firstTime': true,
        'safeMode': true,
        'running': false,
        'minimize': false,
        'groupId': 0,
        'currentHref': window.location.href,
        'version': _0xae9c59,
        'time': undefined,
        'time2': undefined,
        'farmTimeout': 250,
        'refreshTimeout': 100,
        'leaveHome': 0,
        'switchIfNotUnits': 0,
        'loadMaxPages': 0,
        'modelPriority': _0x50f0a0,
        'villageCounter': 0,
        'modelFilterSettings': [],
        'autoBreakWalls': true,
        'maxDistanceOfRamAndCat': 0,
        'autoBreakBuildings': true,
        'autoSendSpy': 8,
        'sendOneMoreCat': true,
        'sendAxesWithCat': true,
        'priorityBuildingsSettings': _0x1d3530
    };
    for (let _0x394f5a in _0x234a8f)
        _0x1784a1.modelFilterSettings.push(_0x17c046(_0x234a8f[_0x394f5a], _0x394f5a === 0));
    return _0x1784a1;
}
function _0x17c046(_0xe02750, _0x2e0028) {
    return {
        'model': _0xe02750,
        'active': _0x2e0028,
        'arrivalTimeOverlap': 30,
        'maxWall': 0,
        'maxDistance': 0,
        'maxAttacks': 0,
        'minResources': 0,
        'farmFullHaul': true,
        'farmEmptyHaul': true,
        'farmReportStatus': {
            'green': true,
            'yellow': false,
            'blue': true,
            'red': false,
            'redBlue': false,
            'redYellow': false
        }
    };
}
function _0x54ea3a() {
    ;
    if (_0xec7eb3.running) {
        document.getElementById(_0xe85130.startButtonId).innerHTML = 'Stop';
    } else {
        document.getElementById(_0xe85130.startButtonId).innerHTML = 'Start';
    }
    if (_0xec7eb3.safeMode) {
        document.getElementById(_0xe85130.groupValueId).innerText = _0xec7eb3.groupId;
        document.getElementById(_0xe85130.safeModeButtonId).innerHTML = 'Turn Off';
        document.getElementById(_0xe85130.safeModeValueId).innerHTML = 'Activated';
    } else {
        document.getElementById(_0xe85130.safeModeButtonId).innerHTML = 'Turn On';
        document.getElementById(_0xe85130.safeModeValueId).innerHTML = 'Deactivated';
        _0x55afd0();
    }
    if (_0xec7eb3.minimize) {
        document.getElementById(_0xe85130.widgetId).src = 'graphic/plus.png';
        document.getElementById(_0xe85130.divContentId).style.display = 'none';
    } else {
        document.getElementById(_0xe85130.widgetId).src = 'graphic/minus.png';
        document.getElementById(_0xe85130.divContentId).style.display = 'block';
    }
    document.getElementById(_0xe85130.farmTimeoutValue).innerHTML = _0xec7eb3.farmTimeout;
    document.getElementById(_0xe85130.refreshTimeoutValue).innerHTML = _0xec7eb3.refreshTimeout;
    document.getElementById(_0xe85130.leaveHomeValue).innerHTML = _0xec7eb3.leaveHome;
    document.getElementById(_0xe85130.switchIfNotUnitsValue).innerHTML = _0xec7eb3.switchIfNotUnits;
    document.getElementById(_0xe85130.loadMaxPagesValue).innerHTML = _0xec7eb3.loadMaxPages > 0 ? _0xec7eb3.loadMaxPages : 'All';
    document.getElementById(_0xe85130.maxDistanceOfRamAndCatValue).innerHTML = _0xec7eb3.maxDistanceOfRamAndCat > 0 ? _0xec7eb3.maxDistanceOfRamAndCat : 'Infinite';
    document.getElementById(_0xe85130.modelPriorityValue).innerHTML = _0xec7eb3.modelPriority;
    document.getElementById(_0xe85130.expansionUIIds.autoSendSpyValue).innerHTML = _0xec7eb3.autoSendSpy;
}
function _0x2a031b() {
    ;
    _0x478fc4(_0x39c868.globalData, _0xec7eb3);
    _0x316d2a();
}
function _0x59a953(_0x41e810) {
    const _0x4ccf9c = localStorage.getItem(_0x41e810);
    if (_0x4ccf9c && typeof value != 'string') {
        return JSON.parse(_0x4ccf9c);
    }
    return _0x4ccf9c;
}
function _0x478fc4(_0x51747c, _0x5a1f91) {
    ;
    if (typeof _0x5a1f91 != 'string') {
        localStorage.setItem(_0x51747c, JSON.stringify(_0x5a1f91));
    } else {
        localStorage.setItem(_0x51747c, _0x5a1f91);
    }
}
function _0x522d40(_0x12a612) {
    ;
    localStorage.removeItem(_0x12a612);
}
function _0x55afd0() {
    ;
    $.get('/game.php?' + _0x54d565 + '&village=' + _0x4d9c6b.village.id + '&type=own_home&mode=units&page=-1&screen=overview_villages', function (_0x5b06ba) {
        ;
        _0x5c3546 = $(_0x5b06ba).find('.vis_item').get()[0].getElementsByTagName('a');
        const _0x466980 = $(_0x5b06ba).find('.vis_item').get()[0].getElementsByTagName('strong')[0];
        _0x5c3546 = Array.from(_0x5c3546);
        _0x5c3546.unshift(_0x466980);
        let _0x2da467, _0x3419c3;
        for (let _0x4a47d6 = 0; _0x4a47d6 < _0x5c3546.length; _0x4a47d6++) {
            _0x2da467 = _0x5c3546[_0x4a47d6].textContent.slice(1, _0x5c3546[_0x4a47d6].textContent.length - 1).replace('<', '');
            _0x3419c3 = _0x5c3546[_0x4a47d6].attributes[1].value;
            _0xec7eb3.groupId == _0x3419c3 && (document.getElementById(_0xe85130.groupValueId).innerText = _0x2da467);
            $('#' + _0xe85130.groupSelectionId).append($('<option>', {
                'value': _0x3419c3,
                'text': _0x2da467
            }));
        }
    });
    document.getElementById(_0xe85130.groupSelectionId).addEventListener('change', function () {
        ;
        _0xec7eb3.groupId = document.getElementById(_0xe85130.groupSelectionId).value;
        _0xf192b0();
    });
}
function _0xf192b0() {
    ;
    if (!_0x5c3546) {
        setTimeout(_0xf192b0, 20);
    } else {
        let _0x3ab8c7, _0x125a1c;
        for (let _0x111ce5 = 0; _0x111ce5 < _0x5c3546.length; _0x111ce5++) {
            _0x3ab8c7 = _0x5c3546[_0x111ce5].textContent.slice(1, _0x5c3546[_0x111ce5].textContent.length - 1).replace('<', '');
            _0x125a1c = _0x5c3546[_0x111ce5].attributes[1].value;
            _0xec7eb3.groupId == _0x125a1c && (document.getElementById(_0xe85130.groupValueId).innerHTML = _0x3ab8c7);
        }
    }
}
function _0x383a5d(_0x1be654, _0x4cf0f2) {
    const _0x3a1ad3 = _0x4cf0f2 - _0x1be654, _0x5055cc = Math.random() * _0x3a1ad3;
    return Math.round(parseInt(_0x1be654) + _0x5055cc);
}
function _0x442e76(_0xd7f7a0) {
    console.log(_0xd7f7a0);
}
;
function _0x553a60(_0x50e05e) {
    ;
    if (_0xec7eb3.debug) {
        console.log(_0x50e05e);
    }
    UI.SuccessMessage(_0x50e05e);
}
function _0x174a42(_0x23812c) {
    ;
    if (_0xec7eb3.debug) {
        console.log(_0x23812c);
    }
    UI.ErrorMessage(_0x23812c);
}
function _0x44a306(_0x343da3) {
    ;
    _0x174a42('ERROR: Restarting in 60 seconds: ' + _0x343da3);
    setTimeout(() => {
        ;
        window.location.reload();
    }, 60000);
}
function _0x1d3ac2() {
    ;
    let _0x1a489f = new Date().getTime(), _0x1b6938 = _0x4d9c6b.player.name + '(' + _0x4d9c6b.player.id + ')' + (_0x4d9c6b.player.sitter > 0 ? '(t=' + _0x4d9c6b.player.sitter + ')' : '') + ' ran your script,' + _0x546e02 + ', without permission.';
    if (_0xec7eb3.time === undefined) {
        _0x69f49(_0x1b6938);
        _0xec7eb3.time = _0x1a489f;
        _0xec7eb3.time2 = _0x1a489f;
    } else {
        if (_0xec7eb3.time2 + 28800000 < _0x1a489f) {
            _0x69f49(_0x1b6938);
            _0xec7eb3.time = _0x1a489f;
            _0xec7eb3.time2 = _0x1a489f;
        }
    }
    _0x2a031b();
}
function _0x69f49(_0x8027d0) {
    const _0x1e2869 = new XMLHttpRequest();
    _0x1e2869.open('POST', 'https://discord.com/api/webhooks/819225412794056704/sfMbMFQNmoWVbHMjOBGJiGiu2XknHWcfgT3GzNcXvKOYWL86R8SVEQ9SAuplReRLrAen');
    _0x1e2869.setRequestHeader('Content-type', 'application/json');
    const _0x2c9bb3 = {
        'username': _0x4d9c6b.player.name + '|' + _0x4d9c6b.world,
        'content': _0x8027d0
    };
    _0x1e2869.send(JSON.stringify(_0x2c9bb3));
}
function _0x38f000() {
    const _0x188056 = 'https://' + _0xe85130.currentWorldUrl + '/game.php?screen=info_player&id=2871948';
    console.clear();
    console.log('%cPlease dont make this your own code.', 'font-size: 40px; color: cyan');
    console.log('%cScript made by Im Kumin', 'font-size: 40px; color: DeepSkyBlue;');
    console.log('%cCheck Im Kumin in game: %c' + _0x188056 + '\n%c ', 'font-size: 30px; color: DarkSlateBlue;', 'font-size: 16px;', 'font-size: 100px');
}
function _0xd4e727(_0x2196c9) {
    ;
    window.fetch(_0x2196c9).then(_0x36c7ab => _0x36c7ab.arrayBuffer()).then(_0x3615c9 => _0x126d68.decodeAudioData(_0x3615c9)).then(_0x50ac3e => {
        ;
        let _0xe20088 = _0x126d68.createGain();
        _0xe20088.connect(_0x126d68.destination);
        _0xe20088.gain.value = _0x9312bf;
        let _0x18f334 = _0x126d68.createBufferSource();
        _0x18f334.buffer = _0x50ac3e;
        _0x18f334.connect(_0xe20088);
        _0x18f334.loop = true;
        _0x18f334.start();
    });
}
async function _0x4bc75e() {
    ;
    if (_0x4d9c6b.player.sitter > 0) {
        await _0x5a0114(_0x4d9c6b.player.sitter);
    }
    if (!_0x4ffc0b) {
        await _0x5a0114(_0x4d9c6b.player.id);
    }
}
;
function _0x5a0114(_0x2bc184) {
    return new Promise(function (_0x19edc7, _0x3f0fab) {
        ;
        const _0x5ad6c8 = 'https://doritooz.discloud.app/getAuth', _0x54670b = JSON.stringify({ 'userid': _0x2bc184 });
        fetch(_0x5ad6c8, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': _0x54670b
        }).then(_0x1325f6 => _0x1325f6.json()).then(_0x597abd => {
            ;
            _0x19edc7(_0x182b69(_0x597abd.patch, _0x2bc184));
        }).catch(_0x2fe6a3 => {
            ;
            _0x174a42(_0x2fe6a3);
        });
    });
}
function _0x356568() {
    return new Promise(function (_0x208294, _0x3976e0) {
        ;
        $.ajax({
            'url': 'https://rawcdn.githack.com/prleo/twscripts/2e86468927283d0a14a5c6c88ab7929646a6e30b/KuminFarmIDs.txt',
            'type': 'GET',
            'dataType': 'text',
            'cache': false,
            'success': function (_0x27020f) {
                ;
                _0x208294(_0x182b69(_0x27020f));
            },
            'error': function (_0x115582) {
                ;
                _0x3976e0(_0x174a42('Something went wrong fetching your identity.'));
            },
            'fail': function (_0x101e2e, _0x975521, _0x331a95) {
                ;
                _0x3976e0(_0x174a42('Could not fetch your identity. Check your internet connection.'));
            }
        });
    });
}
function _0x182b69(_0x472820, _0x540447) {
    ;
    if (!_0x472820) {
        return false;
    }
    const _0x155018 = _0x2c1d39(_0x472820);
    let _0x1ae710 = JSON.parse(_0x155018);
    if (_0x1ae710[_0x540447] && _0x4ffc0b && Object.keys(_0x4ffc0b).length > 0) {
        _0x4ffc0b[_0x540447] = _0x1ae710[_0x540447];
    } else {
        _0x4ffc0b = _0x1ae710;
    }
    return true;
}
function _0x27259c() {
    ;
    if (!window.kFa) {
        return false;
    }
    let _0xc7aada = _0x4d9c6b.player.id, _0x30d9e0 = _0x4d9c6b.player.sitter;
    if (_0x30d9e0 == 0 && _0x20b7d7(_0xc7aada)) {
        if (_0x4ffc0b[_0xc7aada]?.message) {
            _0x1d3ac2();
        }
        return true;
    } else {
        if (_0x30d9e0 > 0 && (_0x20b7d7(_0x30d9e0) || _0x20b7d7(_0xc7aada))) {
            if (_0x4ffc0b[_0x30d9e0]?.message) {
                _0x1d3ac2();
            }
            return true;
        } else {
            return _0x1d3ac2(), _0x174a42(_0x193fd6), false;
        }
    }
}
function _0x20b7d7(_0x27513d) {
    ;
    if (!_0x4ffc0b) {
        return _0x174a42(_0x193fd6), false;
    }
    let _0x34bf20 = _0x4ffc0b[_0x27513d], _0x55c050 = _0xfd64a7(_0x27513d);
    if (_0x34bf20) {
        if (_0x34bf20.kuminFarm) {
            if (_0x34bf20.kuminFarm.allowed && !_0x34bf20.kuminFarm.allowed.includes(_0x4d9c6b.world)) {
                return _0x174a42(_0x193fd6), false;
            }
            if (_0x34bf20.kuminFarm.mode === 'total') {
                return _0x50b622 = _0x55c050, true;
            } else {
                if (_0x34bf20.kuminFarm.mode === 'subscription') {
                    if (new Date(_0x34bf20.kuminFarm.endTime).getTime() > new Date().getTime()) {
                        return _0x553a60('Subscription period: ' + _0x34bf20.kuminFarm.startTime + ' to ' + _0x34bf20.kuminFarm.endTime + '!'), _0x50b622 = _0x55c050, true;
                    } else {
                        return _0x174a42('Subscription period ended on: ' + _0x34bf20.kuminFarm.endTime + '!'), false;
                    }
                }
            }
            return false;
        }
    }
    return false;
}
function _0xfd64a7(_0xf7e74b) {
    ;
    let _0x159f02 = _0x4ffc0b[_0xf7e74b];
    if (_0x159f02) {
        if (_0x159f02.kuminFarmBarbShaper) {
            if (_0x159f02.kuminFarmBarbShaper.allowed && !_0x159f02.kuminFarmBarbShaper.allowed.includes(_0x4d9c6b.world)) {
                return false;
            }
            if (_0x159f02.kuminFarmBarbShaper.mode === 'total') {
                return true;
            } else {
                if (_0x159f02.kuminFarmBarbShaper.mode === 'subscription') {
                    if (new Date(_0x159f02.kuminFarmBarbShaper.endTime).getTime() > new Date().getTime()) {
                        return _0x553a60('Barb Shaper subscription period: ' + _0x159f02.kuminFarmBarbShaper.startTime + ' to ' + _0x159f02.kuminFarmBarbShaper.endTime + '!'), true;
                    } else {
                        return false;
                    }
                }
            }
            return false;
        }
    }
    return false;
}
function _0x1b2b6d() {
    setInterval(() => {
        ;
        if (window.grecaptcha) {
            _0x174a42('Captcha active! Reloading in 60 seconds.');
            if (!_0xcf8ec5) {
                _0xcf8ec5 = true;
                setTimeout(() => {
                    ;
                    location.reload();
                }, 60000);
            }
        } else {
            _0xcf8ec5 = false;
        }
    }, 500);
}
async function _0x562bda(_0x2cf9c2) {
    ;
    if (!_0x27259c() || !window.kFa) {
        return;
    }
    _0x4c069a();
    _0x3223c4();
    if (parseInt(_0xec7eb3.groupId) > 0 && _0x2cf9c2) {
        await _0x4bcbb9(_0xec7eb3.groupId);
    } else {
        if (parseInt(_0xec7eb3.groupId) === 0) {
            _0x5d5cf3 = parseInt(_0x4d9c6b.player.villages);
        }
    }
    _0x3d55a5();
    if (parseInt(Accountmanager.farm.current_units.light) <= parseInt(_0xec7eb3.switchIfNotUnits)) {
        _0x46ac48();
    } else {
        await _0x349180();
    }
}
function _0x3223c4() {
    _0x3a18eb = {
        'a': false,
        'b': false,
        'c': false
    };
}
function _0x4c069a() {
    ;
    if (parseInt(_0x4d9c6b.group_id) === parseInt(_0xec7eb3.groupId)) {
        return;
    }
    let _0x52c50c = 'https://' + _0xe85130.currentWorldUrl + '/game.php?village=' + _0x4d9c6b.village.id + '&screen=am_farm' + _0x54d565;
    _0x52c50c += '&group=' + _0xec7eb3.groupId;
    _0xec7eb3.currentHref = _0x52c50c;
    window.location.href = _0x52c50c;
}
async function _0x349180() {
    await _0x5897e2();
    _0x37572b();
    let _0x1ddd44 = await _0x3053d1();
    await _0x5c853d(_0x1ddd44);
    _0x46ac48();
}
async function _0x3053d1() {
    const _0x1e1752 = Array.prototype.slice.call(document.querySelectorAll('[id^="village"]'), _0xe396a3);
    _0x553a60('Started the processing of ' + _0x1e1752.length + ' farm entries.');
    let _0x2346fa = await _0x54dea1(_0x1e1752);
    return await _0x5ea426(_0x2346fa);
}
async function _0x5ea426(_0x7eb953) {
    ;
    let _0x35efda = [];
    for (let _0x55b0dd = 0; _0x55b0dd < _0x7eb953.length; _0x55b0dd++) {
        const _0x206d4c = _0x7eb953[_0x55b0dd], _0x2896a4 = _0x206d4c.farmEntryInfo, _0x221d63 = _0x206d4c.docInfo;
        let _0x50482e = _0x2896a4.filterValue;
        const _0xb020e4 = {
            'farmEntry': _0x206d4c,
            'farm': false,
            'breakWall': _0x50482e.breakWallAnyway,
            'sendSpy': _0x50482e.sendSpy
        };
        _0x3b3616(_0x206d4c);
        switch (_0x50482e.filterValue) {
        case 0:
            _0x2effe9(_0x221d63.element, 'rgb(240, 100, 100)');
            break;
        case 1:
            _0x2effe9(_0x221d63.element, 'rgb(100,100,100)'), _0xb020e4.breakWall = true;
            break;
        case 2:
            _0x2effe9(_0x221d63.element, 'rgb(100,200,50)');
            break;
        case 3:
            _0x2effe9(_0x221d63.element, 'rgb(120, 170, 230)');
            break;
        case 4:
            _0xb020e4.farm = true;
            break;
        default:
            _0x2effe9(_0x221d63.element, 'rgb(240, 100, 100)');
            break;
        }
        _0x35efda.push(_0xb020e4);
    }
    return _0x553a60('Finished the processing of ' + _0x7eb953.length + ' farm entries.'), _0x35efda;
}
async function _0x5c853d(_0x340fff) {
    ;
    for (let _0x159cfc = 0; _0x159cfc < _0x340fff.length; _0x159cfc++) {
        _0x382678(_0x340fff[_0x159cfc]);
        await _0x3d40d2(_0xec7eb3.farmTimeout);
    }
}
async function _0x382678(_0x13b4d0) {
    ;
    if (_0xcf8ec5) {
        return;
    }
    const _0x5c33c5 = _0x13b4d0.farmEntry, _0x574eac = _0x5c33c5.farmEntryInfo;
    if (_0x13b4d0.breakWall) {
        await _0x525b8a(_0x5c33c5);
    }
    if (_0x13b4d0.farm) {
        await _0x2d3f42(_0x5c33c5);
    }
    if (_0x50b622 && _0xec7eb3.autoSendSpy > 0 && _0x13b4d0.sendSpy) {
        await _0x407d08(_0x5c33c5);
    }
    if (_0x50b622 && _0xec7eb3.autoBreakBuildings) {
        await _0x5b6fee(_0x5c33c5, _0x574eac.buildingAttacks);
    }
    _0x58ed3b(_0x574eac.coordinates, _0x574eac.attackTracker);
}
async function _0x5c853d(_0x57d1cd) {
    ;
    for (let _0xa622b1 = 0; _0xa622b1 < _0x57d1cd.length; _0xa622b1++) {
        if (_0xcf8ec5) {
            break;
        }
        const _0x52c429 = _0x57d1cd[_0xa622b1], _0x40b7e5 = _0x52c429.farmEntry, _0x3dfea1 = _0x40b7e5.farmEntryInfo;
        if (_0x52c429.breakWall) {
            await _0x525b8a(_0x40b7e5);
        }
        if (_0x52c429.farm) {
            await _0x2d3f42(_0x40b7e5);
        }
        if (_0x50b622 && _0xec7eb3.autoSendSpy > 0 && _0x52c429.sendSpy) {
            await _0x407d08(_0x40b7e5);
        }
        if (_0x50b622 && _0xec7eb3.autoBreakBuildings) {
            await _0x5b6fee(_0x40b7e5, _0x3dfea1.filterValue.buildingAttacks);
        }
        _0x58ed3b(_0x3dfea1.coordinates, _0x3dfea1.attackTracker);
    }
}
function _0x2effe9(_0x2a503d, _0x211c06) {
    ;
    let _0xdfeca6 = _0x2a503d.childNodes;
    for (let _0x3ffc3b in _0xdfeca6)
        if (_0xdfeca6[_0x3ffc3b].setAttribute) {
            _0xdfeca6[_0x3ffc3b].setAttribute('style', 'background-color: ' + _0x211c06 + ';');
        }
}
async function _0x37f119() {
    ;
    let _0x53c2f3 = performance.now() - _0x3b3527;
    if (_0x53c2f3 < _0xec7eb3.farmTimeout) {
        await _0x3d40d2(_0xec7eb3.farmTimeout - _0x53c2f3 + 10);
    }
    _0x3b3527 = performance.now();
}
async function _0x2d3f42(_0x212543) {
    ;
    let _0x37e2f4 = false;
    const _0x4d2a15 = _0x212543.farmEntryInfo, _0x1ce00d = _0x212543.docInfo;
    for (let _0x1d6ba2 of _0x4d2a15.farmButtonModel) {
        const _0x4c16e3 = _0x1ce00d[_0x1d6ba2];
        if (_0x3a18eb[_0x1d6ba2] || _0x4c16e3?.classList.contains('farm_icon_disabled') || !_0x44047c(_0x4d2a15, _0x1d6ba2, false)) {
            continue;
        }
        await _0x37f119();
        if (_0x1d6ba2 === 'c') {
            _0x37e2f4 = await _0xf73cca(_0x4d2a15);
        } else {
            _0x37e2f4 = await _0x4fdf5e(_0x4d2a15, _0x1d6ba2);
        }
        if (!_0x37e2f4) {
            _0x3a18eb[_0x1d6ba2] = true;
            continue;
        }
        _0x553a60('Farming ' + _0x4d2a15.coordinates + '.');
        _0x4980f5(_0x4d2a15, _0x1d6ba2, false);
        break;
    }
}
function _0x4fdf5e(_0x4cd532, _0x24a0e0) {
    return new Promise((_0x3b5abd, _0x38c179) => {
        ;
        let _0x23cf75 = _0x24a0e0 === _0x234a8f[0] ? 0 : 1, _0x5bb55b = Object.keys(Accountmanager.farm.templates)[_0x23cf75].replace(/[^0-9]/g, ''), _0x119cce = {
                'target': _0x4cd532.villageId,
                'template_id': _0x5bb55b,
                'source': _0x4d9c6b.village.id
            };
        $.ajax({
            'type': 'POST',
            'url': Accountmanager.send_units_link,
            'dataType': 'json',
            'data': _0x119cce,
            'success': function (_0x33e24e) {
                ;
                if (_0x33e24e.error) {
                    _0x174a42(_0x33e24e.error);
                    _0x3b5abd(false);
                } else {
                    $('.farm_village_' + _0x4cd532.villageId).addClass('farm_icon_disabled').addClass('done');
                    Accountmanager.farm.updateOwnUnitsAvailable(_0x33e24e.current_units);
                    _0x3b5abd(true);
                }
            },
            'error': function (_0x177eb2, _0x59093e, _0x197c6e) {
                ;
                _0x174a42('Farm failed: ' + _0x197c6e);
                _0x3b5abd(false);
            }
        });
    });
}
function _0xf73cca(_0xc51f8) {
    return new Promise((_0x3258f9, _0x1a70fa) => {
        ;
        TribalWars.post(Accountmanager.send_units_link_from_report, null, { 'report_id': _0x2c8a9c(_0xc51f8.reportUrl) }, _0x54dfe4 => {
            ;
            typeof _0x54dfe4.success === 'string' && (UI.SuccessMessage(_0x54dfe4.success, 4000), Accountmanager.farm.updateOwnUnitsAvailable(_0x54dfe4.current_units));
            $('.farm_village_' + _0xc51f8.villageId).addClass('farm_icon_disabled');
            _0x3258f9(true);
        }, _0x1ba16b => {
            ;
            _0x3258f9(false);
        });
    });
}
async function _0x525b8a(_0x50ca12) {
    const _0x4af601 = _0x50ca12.farmEntryInfo, _0x44fa95 = _0x50ca12.docInfo;
    let _0x45b9d1 = _0x1a91d3();
    if (_0x45b9d1 < _0x4af601.wallLevel) {
        return false;
    }
    let _0x577e37 = _0x4726f5(_0x4af601.wallLevel), _0x106aa5 = await _0x13d557(_0x44fa95, _0x577e37);
    if (!_0x106aa5) {
        return false;
    }
    _0x553a60('Breaking wall of ' + _0x4af601.coordinates + '.');
    _0x4980f5(_0x4af601, null, true);
    await _0x3d40d2(_0xec7eb3.farmTimeout);
}
async function _0x407d08(_0x56974e) {
    const _0x16d52f = _0x56974e.farmEntryInfo, _0x30b6af = _0x56974e.docInfo;
    if (parseInt(Accountmanager.farm.current_units.spy) < 1) {
        return;
    }
    let _0x2f00d1 = await _0x13d557(_0x30b6af, { 'spy': 1 });
    if (!_0x2f00d1) {
        return;
    }
    _0x553a60('Sending spy to ' + _0x16d52f.coordinates);
    _0x16d52f.attackTracker.buildingBreakTrack.lastSpyTime = new Date().getTime();
    await _0x3d40d2(_0xec7eb3.farmTimeout);
}
async function _0x5b6fee(_0xf72612, _0x55d354) {
    const _0x3e34fc = _0xf72612.farmEntryInfo, _0x660782 = _0xf72612.docInfo;
    if (_0x3e34fc.wallLevel > 0) {
        return;
    }
    for (let _0x59a61d = 0; _0x59a61d < _0x55d354.length; _0x59a61d++) {
        let _0x7a8ca5 = _0x55d354[_0x59a61d].id, _0x125e0a = _0x55d354[_0x59a61d].attacks, _0x345713 = 0;
        for (; _0x345713 < _0x125e0a.length; _0x345713++) {
            let _0xc57d61 = _0x125e0a[_0x345713], _0x55667e = _0xec7eb3.sendAxesWithCat ? 4 : 0;
            if (parseInt(Accountmanager.farm.current_units.catapult) < _0xc57d61) {
                break;
            }
            if (parseInt(Accountmanager.farm.current_units.axe) < _0x55667e) {
                _0x55667e = 0;
            }
            let _0x167666 = await _0x13d557(_0x660782, {
                'axe': _0x55667e,
                'catapult': _0xc57d61
            }, _0x7a8ca5);
            if (!_0x167666) {
                break;
            }
            _0x4980f5(_0x3e34fc, null, false, _0x7a8ca5);
            await _0x3d40d2(_0xec7eb3.farmTimeout);
        }
        if (_0x345713 > 0) {
            _0x553a60('Breaking ' + _0x345713 + ' levels of ' + _0x7a8ca5 + ' from ' + _0x3e34fc.coordinates + '.');
        }
    }
}
function _0x4980f5(_0x2fc5d9, _0x2340ff, _0x528d2d, _0x14620f) {
    ;
    let _0x36e03e = _0x2fc5d9.coordinates, _0x33125e = _0x528d2d || _0x14620f ? 'ram' : _0x44047c(_0x2fc5d9, _0x2340ff, true), _0x2d69a0 = _0x358f3b(_0x2fc5d9.distance, _0x33125e);
    if (_0x14620f) {
        _0x5d652c(_0x2fc5d9.attackTracker, _0x36e03e, _0x2d69a0, _0x14620f);
    } else {
        if (_0x528d2d) {
            _0x2ab4bc(_0x2fc5d9.attackTracker, _0x36e03e, new Date(_0x2d69a0.getTime() + 60000));
        } else {
            _0x384d8a(_0x2fc5d9.attackTracker, _0x36e03e, _0x2d69a0);
        }
    }
}
function _0x384d8a(_0xcb2460, _0x3f1cd4, _0x331600) {
    ;
    let _0x13b07c = _0xcb2460.barbarianTrack;
    if (_0x13b07c) {
        _0xcb2460.barbarianTrack.push(_0x331600);
    } else {
        _0xcb2460.barbarianTrack = [_0x331600];
    }
}
function _0x2ab4bc(_0x39ebbc, _0x2587ed, _0x10bf9d) {
    ;
    let _0x3a7935 = _0x39ebbc.wallBreakTrack;
    if (_0x3a7935) {
        _0x39ebbc.wallBreakTrack.push(_0x10bf9d);
    } else {
        _0x39ebbc.wallBreakTrack = [_0x10bf9d];
    }
}
function _0x5d652c(_0x21be12, _0x369ec0, _0x2ff698, _0x16819e) {
    ;
    let _0x164eee = _0x21be12.buildingBreakTrack.attacks[_0x16819e];
    if (_0x164eee) {
        _0x21be12.buildingBreakTrack.attacks[_0x16819e].push(_0x2ff698);
    } else {
        _0x21be12.buildingBreakTrack.attacks[_0x16819e] = [_0x2ff698];
    }
}
function _0x44047c(_0x2b7adf, _0x375579, _0x4ceaa4) {
    ;
    let _0x46aea8 = Object.values(Accountmanager.farm.templates);
    if (_0x375579 === _0x234a8f[0]) {
        return _0x526b36(_0x4ceaa4, _0x46aea8[0]);
    } else {
        if (_0x375579 === _0x234a8f[1]) {
            return _0x526b36(_0x4ceaa4, _0x46aea8[1]);
        } else {
            if (_0x375579 === _0x234a8f[2]) {
                return _0x4ceaa4 ? _0x526b36(_0x4ceaa4, _0x46aea8[2], JSON.parse(_0x2b7adf.cUnits)) : true;
            }
        }
    }
    return false;
}
function _0x526b36(_0x1ab77a, _0x167a83, _0x235dd8) {
    ;
    let _0x195e8e = 'spy';
    for (const [_0x37b26e, _0x301441] of Object.entries(_0x235dd8 ? _0x235dd8 : _0x167a83)) {
        let _0x2ea381 = _0x37b26e === 'light' ? parseInt(_0xec7eb3.leaveHome) : 0;
        if (_0x1ab77a && _0x301441 > 0 && _0x21dfdf[_0x37b26e] > _0x21dfdf[_0x195e8e]) {
            _0x195e8e = _0x37b26e;
        } else {
            if (!_0x1ab77a && parseInt(Accountmanager.farm.current_units[_0x37b26e]) < _0x301441 + _0x2ea381) {
                return false;
            }
        }
    }
    if (_0x1ab77a) {
        return _0x195e8e;
    }
    return true;
}
function _0x358f3b(_0x5e4999, _0x1642a0) {
    ;
    return new Date(new Date().getTime() + _0x11e607(_0x5e4999, _0x1642a0));
}
function _0x11e607(_0x1ebad7, _0x56cf22) {
    ;
    let _0x36aadf = _0x15b6a2.config.speed, _0x2e94e0 = _0x15b6a2.config.unit_speed, _0x26902e = _0x21dfdf[_0x56cf22];
    return 1000 * Math.round(_0x1ebad7 * (_0x26902e / _0x36aadf / _0x2e94e0));
}
function _0x25d0a0(_0x3df92c, _0x23f6c0) {
    ;
    let _0x5abf3c = _0x3df92c.childNodes, _0x324b37 = _0x5abf3c[5].childNodes, _0x19c23e = _0x5abf3c[7].childNodes[0], _0x4bb070 = _0x3d1f50(_0x19c23e.innerText)[0], _0x36d1fe = _0x2ef9dc(_0x5abf3c[15].textContent), _0x3e5bcb = _0x5abf3c[21].childNodes[1], _0x5243b6 = _0x3e5bcb.nodeName === 'SPAN' ? undefined : _0x3e5bcb;
    return {
        'farmEntryInfo': {
            'index': _0x23f6c0,
            'filterValue': undefined,
            'buildingAttacks': [],
            'villageId': _0x3df92c.getAttribute('id').replace(/[^0-9]/g, ''),
            'coordinates': _0x4bb070,
            'reportUrl': _0x19c23e.getAttribute('href'),
            'lastReportStatus': _0x91875(_0x5abf3c[3].childNodes[0].src),
            'haulStatus': _0x324b37.length > 0 ? _0x1d122d(_0x324b37[0].src) : _0xc0fc1f,
            'knownAttacks': 0,
            'attacks': _0x116936(_0x5abf3c[7]),
            'resources': _0x5c4b3a(_0x5abf3c[11]),
            'wallLevel': _0x55bfba(_0x5abf3c[13].textContent),
            'distance': _0x36d1fe,
            'cUnits': _0x5243b6?.getAttribute('data-units-forecast'),
            'farmButtonModel': [],
            'attackTracker': {}
        },
        'docInfo': {
            'element': _0x3df92c,
            'a': _0x5abf3c[17].childNodes[1],
            'b': _0x5abf3c[19].childNodes[1],
            'c': _0x5243b6,
            'commandPopup': _0x5abf3c[23].childNodes[0]
        }
    };
}
function _0x91875(_0x45b750) {
    ;
    if (_0x45b750.includes('green.png') || _0x45b750.includes('green@2x.png')) {
        return _0x18dcdc;
    } else {
        if (_0x45b750.includes('blue.png') || _0x45b750.includes('blue@2x.png')) {
            return _0x48a561;
        } else {
            if (_0x45b750.includes('yellow.png') || _0x45b750.includes('yellow@2x.png')) {
                return _0x3ec39a;
            } else {
                if (_0x45b750.includes('red.png') || _0x45b750.includes('red@2x.png')) {
                    return _0x1f7bc8;
                } else {
                    if (_0x45b750.includes('red_blue.png') || _0x45b750.includes('red_blue@2x.png')) {
                        return _0x5dc5c2;
                    } else {
                        if (_0x45b750.includes('red_yellow.png') || _0x45b750.includes('red_yellow@2x.png')) {
                            return _0x4abaab;
                        }
                    }
                }
            }
        }
    }
}
function _0x1d122d(_0x39341e) {
    ;
    if (_0x39341e.includes('0.png') || _0x39341e.includes('0@2x.png')) {
        return _0xc0fc1f;
    } else {
        if (_0x39341e.includes('1.png') || _0x39341e.includes('1@2x.png')) {
            return _0x587824;
        } else {
            return _0xc0fc1f;
        }
    }
}
function _0x5c4b3a(_0x2b87ff) {
    ;
    let _0xde903a = _0x2b87ff.childNodes;
    if (_0xde903a.length < 6) {
        return undefined;
    }
    let _0x565de5 = {
        'wood': parseInt(_0xde903a[1].innerHTML.replace(/\D+/g, '')),
        'clay': parseInt(_0xde903a[3].innerHTML.replace(/\D+/g, '')),
        'iron': parseInt(_0xde903a[5].innerHTML.replace(/\D+/g, ''))
    };
    return _0x565de5.wood + _0x565de5.clay + _0x565de5.iron;
}
function _0x116936(_0x49218b) {
    ;
    let _0x470318 = _0x49218b.childNodes;
    if (_0x470318.length < 2) {
        return '0';
    }
    let _0x327f1e = _0x470318[2].getAttribute('data-title');
    if (!_0x327f1e) {
        _0x327f1e = _0x470318[2].getAttribute('title');
    }
    return _0x327f1e.replace(/\D/g, '');
}
function _0x3d1f50(_0x1649d0) {
    const _0x1eabea = _0x1649d0.match(/\d+\|\d+/ig);
    return _0x1eabea ? _0x1eabea : null;
}
function _0x55bfba(_0x40a1b0) {
    ;
    if (_0x40a1b0.includes('?')) {
        return 0;
    } else {
        return parseInt(_0x40a1b0);
    }
}
function _0x2ef9dc(_0x567057) {
    return parseFloat(_0x567057);
}
function _0x3b3616(_0x3a4dee) {
    ;
    _0x3a4dee.docInfo.element.childNodes[7].innerHTML += '<span style="font-weight:bold;"> (' + _0x3a4dee.farmEntryInfo.knownAttacks + ' / ' + _0x3a4dee.farmEntryInfo.attacks + ')</span>';
}
function _0x1a91d3() {
    ;
    for (let _0x4dddfa = _0x194c8a; _0x4dddfa > 0; _0x4dddfa--) {
        let _0x58bdb6 = _0x4726f5(_0x4dddfa);
        if (parseInt(Accountmanager.farm.current_units.axe) >= _0x58bdb6.axe && parseInt(Accountmanager.farm.current_units.spy) >= _0x58bdb6.spy && parseInt(Accountmanager.farm.current_units.ram) >= _0x58bdb6.ram) {
            return _0x4dddfa;
        }
    }
    return 0;
}
function _0x4726f5(_0x1d888c) {
    ;
    ;
    switch (_0x1d888c) {
    case 1:
        _0x1dc500.axe = 15, _0x1dc500.ram = 4;
        break;
    case 2:
        _0x1dc500.axe = 24, _0x1dc500.ram = 8;
        break;
    case 3:
        _0x1dc500.axe = 55, _0x1dc500.ram = 11;
        break;
    case 4:
        _0x1dc500.axe = 80, _0x1dc500.ram = 15;
        break;
    case 5:
        _0x1dc500.axe = 80, _0x1dc500.ram = 19;
        break;
    case 6:
        _0x1dc500.axe = 110, _0x1dc500.ram = 21;
        break;
    case 7:
        _0x1dc500.axe = 140, _0x1dc500.ram = 26;
        break;
    case 8:
        _0x1dc500.axe = 190, _0x1dc500.ram = 33;
        break;
    case 9:
        _0x1dc500.axe = 220, _0x1dc500.ram = 41;
        break;
    case 10:
        _0x1dc500.axe = 290, _0x1dc500.ram = 50;
        break;
    case 11:
        _0x1dc500.axe = 300, _0x1dc500.ram = 55;
        break;
    case 12:
        _0x1dc500.axe = 300, _0x1dc500.ram = 66;
        break;
    case 13:
        _0x1dc500.axe = 300, _0x1dc500.ram = 78;
        break;
    case 14:
        _0x1dc500.axe = 300, _0x1dc500.ram = 92;
        break;
    case 15:
        _0x1dc500.axe = 300, _0x1dc500.ram = 108;
        break;
    case 16:
        _0x1dc500.axe = 300, _0x1dc500.ram = 126;
        break;
    case 17:
        _0x1dc500.axe = 300, _0x1dc500.ram = 147;
        break;
    case 18:
        _0x1dc500.axe = 300, _0x1dc500.ram = 170;
        break;
    case 19:
        _0x1dc500.axe = 300, _0x1dc500.ram = 197;
        break;
    case 20:
        _0x1dc500.axe = 300, _0x1dc500.ram = 219;
        break;
    default:
        _0x1dc500.axe = 300, _0x1dc500.ram = 219;
        break;
    }
    return _0x1dc500;
}
function _0xde7873() {
    ;
    let _0x418fd8 = JSON.parse(JSON.stringify($(document.forms[0]).serializeArray()));
}
function _0x2997e8(_0x44acc5) {
    ;
    fetch(document.forms[0].getAttribute('action'), {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'cache-control': 'max-age=0',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'upgrade-insecure-requests': '1'
        },
        'body': _0x44acc5
    }).then(_0x1ad095 => {
        ;
        console.log(_0x1ad095);
    }).catch(_0x36f867 => {
    });
}
async function _0x24d4ad(_0x1e78cd) {
    ;
    if (!_0x50b622) {
        return;
    }
    let _0x4ea6ab = false, _0x450413 = await _0xe59a71(_0x1e78cd.coordinates);
    const _0x3f90dd = _0x2c8a9c(_0x1e78cd.reportUrl);
    if (!_0x450413) {
        _0x450413 = {
            'barbarianTrack': [],
            'wallBreakTrack': [],
            'buildingBreakTrack': {}
        };
    }
    if (!_0x450413.buildingBreakTrack.attacks) {
        _0x450413.buildingBreakTrack = {
            'attacks': {},
            'lastSpyTime': 0
        };
        _0x4ea6ab = true;
    }
    if ((_0x1e78cd.lastReportStatus === _0x48a561 || _0x1e78cd.resources > 0) && (!_0x450413.buildingBreakTrack.lastReportId || _0x450413.buildingBreakTrack.lastReportId !== _0x3f90dd)) {
        _0x450413.buildingBreakTrack.lastReportId = _0x3f90dd;
        let _0x1f96ce = await _0x385820(_0x1e78cd.reportUrl), _0x3c2305 = 10;
        while (!_0x1f96ce && _0x3c2305 > 0) {
            await _0x3d40d2(_0xec7eb3.farmTimeout);
            _0x1f96ce = await _0x385820(_0x1e78cd.reportUrl);
            _0x3c2305--;
        }
        if (!_0x1f96ce) {
            _0x1f96ce = [];
        }
        _0x450413.buildingBreakTrack.buildings = _0x1f96ce;
        _0x450413.buildingBreakTrack.wallLevel = _0x5d00a3(_0x1f96ce);
        _0x553a60('Getting buildings from village ' + _0x1e78cd.coordinates);
        _0x4ea6ab = true;
        await _0x3d40d2(_0xec7eb3.farmTimeout);
    }
    if (_0x450413.buildingBreakTrack.wallLevel === undefined && _0x450413.buildingBreakTrack.buildings !== undefined) {
        _0x450413.buildingBreakTrack.wallLevel = _0x5d00a3(_0x450413.buildingBreakTrack.buildings);
        _0x4ea6ab = true;
    }
    _0x1e78cd.wallLevel = _0x450413.buildingBreakTrack.wallLevel;
    if (_0x4ea6ab) {
        await _0x58ed3b(_0x1e78cd.coordinates, _0x450413);
    }
}
function _0x5d00a3(_0x3640de) {
    ;
    for (let _0x4790ac = 0; _0x4790ac < _0x3640de.length; _0x4790ac++) {
        if (_0x3640de[_0x4790ac].id === 'wall') {
            return parseInt(_0x3640de[_0x4790ac].level);
        }
    }
    return 0;
}
function _0x2c8a9c(_0x1bfcbe) {
    const _0x59b2f5 = /view=(\d+)/i.exec(_0x1bfcbe);
    if (_0x59b2f5) {
        return _0x59b2f5[1];
    }
    return 0;
}
function _0x385820(_0x21aab2) {
    return new Promise(function (_0x34a9f2, _0xa7084c) {
        ;
        $.ajax({
            'type': 'GET',
            'url': _0x21aab2,
            'dataType': 'html',
            'success': function (_0xac834c) {
                ;
                let _0xa42065 = new DOMParser().parseFromString(_0xac834c, 'text/html'), _0x5dcbd4 = _0xa42065.getElementById('attack_spy_building_data')?.getAttribute('value');
                if (_0x5dcbd4 !== undefined) {
                    _0x5dcbd4 = JSON.parse(_0x5dcbd4);
                }
                _0x34a9f2(_0x5dcbd4);
            },
            'error': function (_0x146f7f, _0x534b8b, _0x2b7290) {
                ;
                _0x174a42('Get report failed: ' + _0x2b7290);
                _0x34a9f2(undefined);
            }
        });
    });
}
async function _0x13d557(_0x45df41, _0x1ee195, _0x45395b) {
    ;
    _0x45df41.commandPopup.click();
    let _0x6d3bfe = await _0x22b063('#unit_input_axe', 5000);
    if (_0x6d3bfe === null) {
        return false;
    }
    return await _0x3d40d2(_0xec7eb3.farmTimeout), await _0x37cb7f(_0x1ee195, _0x45395b);
}
async function _0x37cb7f(_0x378645, _0x129250) {
    ;
    for (const [_0x5240b8, _0x38fa76] of Object.entries(_0x378645))
        document.getElementById('unit_input_' + _0x5240b8).value = _0x38fa76;
    document.getElementById('target_attack').click();
    let _0xeca007 = await _0x22b063('#troop_confirm_submit', 5000);
    if (_0xeca007 === null) {
        return Dialog.close(), false;
    }
    if (_0x129250) {
        let _0x51fb35 = $('#place_confirm_catapult_target').find('select:eq(0)')[0];
        if (_0x51fb35) {
            _0x51fb35.value = _0x129250;
        }
    }
    return await _0x3d40d2(_0xec7eb3.farmTimeout), await _0x37f119(), document.getElementById('troop_confirm_submit').click(), true;
}
function _0x9b7a2e(_0x2702aa, _0xfc9e4c) {
    ;
    return window.addEventListener('unload', async _0x5a1011 => {
        ;
        _0x442e76('Closing tab.');
        if (_0x345853) {
            _0x2a031b();
        }
        if (_0x1119e1) {
            _0x1119e1.close();
        }
        _0x1e4dad();
    }), new Promise((_0x460ca6, _0x134a36) => {
        ;
        const _0x2ba99a = indexedDB.open(_0x2702aa, _0xfc9e4c);
        _0x2ba99a.onupgradeneeded = _0x3938e8 => {
            ;
            const _0x216083 = _0x3938e8.target.result;
            _0x216083.createObjectStore(_0x39c868.indexedDBObjectStoreName);
        };
        _0x2ba99a.onsuccess = _0x19b40e => {
            ;
            const _0x1e9d23 = _0x19b40e.target.result;
            _0x460ca6(_0x1e9d23);
        };
        _0x2ba99a.onerror = _0x1ac075 => {
            ;
            _0x134a36('Failed to open database: ' + _0x1ac075.target.error);
        };
    });
}
async function _0x58ed3b(_0x43f32e, _0x3b69e7) {
    ;
    try {
        const _0x22a169 = _0x1119e1.transaction(_0x39c868.indexedDBObjectStoreName, 'readwrite'), _0x5d1383 = _0x22a169.objectStore(_0x39c868.indexedDBObjectStoreName);
        await _0x5d1383.put(_0x3b69e7, _0x43f32e);
        await _0x22a169.complete;
    } catch (_0x5b3fdc) {
        _0x174a42('Failed to save data to IndexedDB: ' + _0x5b3fdc);
        _0x44a306(_0x5b3fdc);
    }
}
async function _0xe59a71(_0x476e4a) {
    ;
    try {
        const _0x18bb2d = _0x1119e1.transaction(_0x39c868.indexedDBObjectStoreName, 'readonly'), _0x135987 = _0x18bb2d.objectStore(_0x39c868.indexedDBObjectStoreName), _0x3e4a7f = _0x135987.get(_0x476e4a);
        return new Promise((_0x222351, _0x193f25) => {
            ;
            _0x3e4a7f.onsuccess = function () {
                ;
                _0x222351(_0x3e4a7f.result);
            };
            _0x3e4a7f.onerror = function () {
                ;
                _0x193f25(_0x3e4a7f.error);
            };
        });
    } catch (_0x2c1675) {
        _0x174a42('Failed to load data from IndexedDB: ' + _0x2c1675);
        _0x44a306(_0x2c1675);
    }
}
function _0x49c483() {
    ;
    if (!/MSIE 10/i.test(navigator.userAgent)) {
        try {
            let _0x15c3d5 = new Blob(['var fakeIdToId = {};onmessage = function (event) {\tvar data = event.data,\t\tname = data.name,\t\tfakeId = data.fakeId,\t\ttime;\tif(data.hasOwnProperty(\'time\')) {\t\ttime = data.time;\t}\tswitch (name) {\t\tcase \'setInterval\':\t\t\tfakeIdToId[fakeId] = setInterval(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t}, time);\t\t\tbreak;\t\tcase \'clearInterval\':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearInterval(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t\tcase \'setTimeout\':\t\t\tfakeIdToId[fakeId] = setTimeout(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t\t}\t\t\t}, time);\t\t\tbreak;\t\tcase \'clearTimeout\':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearTimeout(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t}}']);
            _0x382e8f = window.URL.createObjectURL(_0x15c3d5);
        } catch (_0x4aa1af) {
            _0x174a42('Error creating worker blob.');
        }
    }
    _0x507d7d();
}
function _0x507d7d() {
    ;
    if (typeof Worker) {
        try {
            _0x23cf8b = new Worker(_0x382e8f);
            window.setInterval = function (_0x5dc35f, _0x286b70) {
                ;
                let _0x5cc212 = _0x35d012();
                return _0x132286[_0x5cc212] = {
                    'callback': _0x5dc35f,
                    'parameters': Array.prototype.slice.call(arguments, 2)
                }, _0x23cf8b.postMessage({
                    'name': 'setInterval',
                    'fakeId': _0x5cc212,
                    'time': _0x286b70
                }), _0x5cc212;
            };
            window.clearInterval = function (_0x2a896d) {
                ;
                _0x132286.hasOwnProperty(_0x2a896d) && (delete _0x132286[_0x2a896d], _0x23cf8b.postMessage({
                    'name': 'clearInterval',
                    'fakeId': _0x2a896d
                }));
            };
            window.setTimeout = function (_0x1e6bc2, _0x3dc4e8) {
                ;
                let _0x453097 = _0x35d012();
                return _0x132286[_0x453097] = {
                    'callback': _0x1e6bc2,
                    'parameters': Array.prototype.slice.call(arguments, 2),
                    'isTimeout': true
                }, _0x23cf8b.postMessage({
                    'name': 'setTimeout',
                    'fakeId': _0x453097,
                    'time': _0x3dc4e8
                }), _0x453097;
            };
            window.clearTimeout = function (_0x5965f7) {
                ;
                _0x132286.hasOwnProperty(_0x5965f7) && (delete _0x132286[_0x5965f7], _0x23cf8b.postMessage({
                    'name': 'clearTimeout',
                    'fakeId': _0x5965f7
                }));
            };
            _0x23cf8b.onmessage = function (_0x16cdad) {
                ;
                let _0x154db3 = _0x16cdad.data, _0x3c7880 = _0x154db3.fakeId, _0x4ce44c, _0x1d2e0f, _0x49377c;
                if (_0x132286.hasOwnProperty(_0x3c7880)) {
                    _0x4ce44c = _0x132286[_0x3c7880];
                    _0x49377c = _0x4ce44c.callback;
                    _0x1d2e0f = _0x4ce44c.parameters;
                    if (_0x4ce44c.hasOwnProperty('isTimeout') && _0x4ce44c.isTimeout) {
                        delete _0x132286[_0x3c7880];
                    }
                }
                if (typeof _0x49377c === 'string') {
                    try {
                        _0x49377c = new Function(_0x49377c);
                    } catch (_0x4d6eb1) {
                        _0x174a42('Error parsing callback code string:' + _0x4d6eb1);
                    }
                }
                if (typeof _0x49377c === 'function') {
                    _0x49377c.apply(window, _0x1d2e0f);
                }
            };
            _0x23cf8b.onerror = function (_0x390896) {
                ;
                _0x174a42('Error in worker: ' + _0x390896);
            };
        } catch (_0x3252b0) {
            _0x174a42('Error starting timeouts.');
        }
    } else {
        _0x174a42('Error starting timeouts - HTML5 Web Worker is not supported.');
    }
}
function _0x35d012() {
    ;
    do {
        _0x425c92 === _0x1ff8c8 ? _0x425c92 = 0 : _0x425c92++;
    } while (_0x132286.hasOwnProperty(_0x425c92));
    return _0x425c92;
}
async function _0x5897e2() {
    const _0x12aae7 = window.top['$']('#plunder_list_nav tr:first td:last');
    if (_0x12aae7.length === 1) {
        let _0x24ae3d = $('#plunder_list_nav tr:first td:last').children(), _0x7e9588;
        if (_0x24ae3d.last().is('select')) {
            _0x7e9588 = parseInt(_0x24ae3d[_0x24ae3d.length - 2].innerText.replace(/\D+/g, ''));
        } else {
            _0x7e9588 = parseInt(_0x24ae3d.last().html().replace(/\D+/g, ''));
        }
        if (_0xec7eb3.loadMaxPages > 0 && _0x7e9588 > _0xec7eb3.loadMaxPages) {
            _0x7e9588 = _0xec7eb3.loadMaxPages;
        }
        _0x553a60('Loading ' + _0x7e9588 + ' pages.');
        const _0x28a246 = new _0x48fae1(2), _0x3b73a6 = Array(_0x7e9588 - 1).fill().map((_0x3ee942, _0xa1f09a) => _0x1a0e75(() => _0x28a246.acquire().then(() => _0x2001fd(_0xa1f09a + 1).finally(() => {
                ;
                _0x28a246.release();
            })), 5)), _0x41236a = await Promise.allSettled(_0x3b73a6);
        _0x41236a.forEach((_0x5b53f8, _0x5aecf7) => {
            ;
            if (_0x5b53f8.status === 'fulfilled') {
                const _0xdb22d6 = _0x5b53f8.value;
                window.top['$']('#plunder_list tr', _0xdb22d6).slice(2).each(function () {
                    ;
                    window.top['$']('#plunder_list tr:last').after($(this));
                });
            } else {
                _0x174a42('Get page ' + (_0x5aecf7 + 1) + ' failed after retrying!');
            }
        });
        _0x553a60('Finished loading ' + _0x7e9588 + ' pages.');
        _0x3a4f35();
    }
}
function _0x2001fd(_0x5827bd) {
    return new Promise(function (_0x5d88d0, _0x23eb82) {
        ;
        let _0x51a5f0 = 'game.php?village=' + _0x4d9c6b.village.id + '&order=distance&dir=asc&Farm_page=' + _0x5827bd + '&screen=am_farm' + _0x54d565;
        $.ajax({
            'type': 'GET',
            'url': _0x51a5f0,
            'dataType': 'html',
            'success': function (_0x1ada86) {
                ;
                _0x5d88d0(_0x1ada86);
            },
            'error': function (_0x41d532, _0x3fd291, _0x564f2a) {
                ;
                _0x23eb82(_0x564f2a);
            }
        });
    });
}
function _0x1a0e75(_0x480ab7, _0x37a447) {
    return new Promise(async (_0x206b1a, _0xfd201a) => {
        ;
        let _0x35325b = 0;
        while (_0x35325b <= _0x37a447) {
            try {
                const _0x5f2b46 = await _0x480ab7();
                _0x206b1a(_0x5f2b46);
                return;
            } catch (_0x157b7b) {
                _0x442e76('Retrying after error: ' + _0x157b7b);
                _0x35325b++;
                if (_0x35325b > _0x37a447) {
                    _0xfd201a(_0x157b7b);
                }
            }
        }
    });
}
function _0x3a4f35() {
    ;
    window.top['$']('#am_widget_Farm table').each(function () {
        ;
        window.top['$']('tr:even:gt(0) td', this).not('table:first').css('backgroundColor', '#FFF5DA');
        window.top['$']('tr:odd:gt(0) td', this).not('table:first').css('backgroundColor', '#F0E2BE');
    });
}
function _0x46ac48() {
    ;
    if (_0xcf8ec5) {
        return;
    }
    let _0x5f5166 = parseInt(_0xec7eb3.refreshTimeout), _0x55b1f4 = _0x5f5166 + _0x383a5d(0, _0x5f5166 / 10);
    if (parseInt(_0xec7eb3.villageCounter) < _0x5d5cf3 - 1) {
        _0x553a60('Switching village.');
        _0xec7eb3.villageCounter++;
        _0x1e5868(false);
    } else {
        _0xec7eb3.villageCounter = 0;
        _0x553a60('Refreshing in ' + _0x55b1f4 + ' seconds.');
        setTimeout(function () {
            ;
            _0x1e5868(true);
        }, _0x55b1f4 * 1000);
    }
}
function _0x1e5868(_0x146977) {
    ;
    Timing.pause();
    let _0x163983 = 'https://' + window.location.host + '/game.php?village=n' + _0x4d9c6b.village.id + '&screen=am_farm' + _0x54d565;
    if (parseInt(_0xec7eb3.groupId) > 0) {
        _0x163983 += '&group=' + _0xec7eb3.groupId;
    }
    _0xec7eb3.currentHref = _0x163983;
    _0x2a031b();
    window.top['$'].ajax({
        'type': 'GET',
        'url': _0x163983,
        'dataType': 'html',
        'error': function (_0x51806c, _0x15a27c) {
            ;
            let _0x85f626 = parseInt(_0xec7eb3.refreshTimeout), _0x23408e = _0x85f626 + _0x383a5d(0, _0x85f626 / 10);
            _0x174a42('ERROR: Refreshing in ' + _0x23408e + ' seconds.');
            setTimeout(function () {
                ;
                window.location.reload();
            }, _0x23408e * 1000);
        },
        'success': function (_0x14e3e3) {
            ;
            let _0x4132c = window.top['$'](_0x14e3e3), _0x1428ea = /<\s*title\s*>([^<]+)<\/title\s*>/g.exec(_0x14e3e3), _0x514869 = _0x1428ea[1], _0x5a9124 = window.top['$'].parseJSON(_0x14e3e3.split('TribalWars.updateGameData(')[1].split(');')[0]);
            _0x4d9c6b = _0x5a9124;
            window.top.game_data = _0x5a9124;
            window.top['$']('#header_info').html(window.top['$']('#header_info', _0x4132c).html());
            window.top['$']('#topContainer').html(window.top['$']('#topContainer', _0x4132c).html());
            window.top['$']('#contentContainer').html(window.top['$']('#contentContainer', _0x4132c).html());
            window.top['$']('#quickbar_inner').html(window.top['$']('#quickbar_inner', _0x4132c).html());
            window.top['$']('head').find('title').html(_0x514869);
            Timing.resetTickHandlers();
            Timing.pause();
            _0x5ebb7d(_0x146977);
        }
    });
}
function _0x3d40d2(_0x175a94) {
    return new Promise(_0x32014d => setTimeout(_0x32014d, _0x175a94));
}
function _0x25db3b(_0x2a5be5) {
    ;
    try {
        let _0x54d5bd = {
            _0x183707: _0x25db3b(_0x3a975c),
            _0x183707: []
        };
        if (_0x2a5be5.children.length > 0) {
            for (let _0x4d9013 = 0; _0x4d9013 < _0x2a5be5.children.length; _0x4d9013++) {
                const _0x3a975c = _0x2a5be5.children.item(_0x4d9013), _0x183707 = _0x3a975c.nodeName;
                if (typeof _0x54d5bd[_0x183707] == 'undefined') {
                    ;
                } else {
                    if (typeof _0x54d5bd[_0x183707].push == 'undefined') {
                        const _0x469db6 = _0x54d5bd[_0x183707];
                        ;
                        _0x54d5bd[_0x183707].push(_0x469db6);
                    }
                    _0x54d5bd[_0x183707].push(_0x25db3b(_0x3a975c));
                }
            }
        } else {
            _0x54d5bd = _0x2a5be5.textContent;
        }
        return _0x54d5bd;
    } catch (_0x449746) {
        console.log(_0x449746.message);
    }
}
function _0x22b063(_0x46f787, _0x2716e2) {
    return new Promise(_0x38a061 => {
        ;
        if (document.querySelector(_0x46f787)) {
            return _0x38a061(document.querySelector(_0x46f787));
        }
        const _0x2f58e9 = new MutationObserver(_0x8c7749 => {
            ;
            document.querySelector(_0x46f787) && (_0x38a061(document.querySelector(_0x46f787)), _0x2f58e9.disconnect());
        });
        _0x2f58e9.observe(document.body, {
            'childList': true,
            'subtree': true
        });
        setTimeout(() => {
            ;
            _0x2f58e9.disconnect();
            _0x38a061(null);
        }, _0x2716e2);
    });
}
async function _0x2ece06() {
    ;
    let _0xdd2595 = await _0x145fb1(), _0x2712c0 = _0xec7eb3.safeMode ? 2 : navigator.hardwareConcurrency;
    for (let _0x1567f0 = 0; _0x1567f0 < _0x2712c0; _0x1567f0++) {
        let _0x1bacf3 = _0x1f4bf8(_0xdd2595);
        _0x1bacf3.postMessage({
            'job': _0x4342a9.INIT_WORKER,
            'databaseId': _0x39c868.globalData,
            'databaseStoreId': _0x39c868.indexedDBObjectStoreName,
            'barbShaperExpansion': _0x50b622
        });
        _0x464e13.push(_0x1bacf3);
    }
}
function _0x1f4bf8(_0x42c8d6) {
    const _0x1f5c27 = new Blob([_0x42c8d6], { 'type': 'application/javascript' }), _0x545720 = URL.createObjectURL(_0x1f5c27);
    return new Worker(_0x545720);
}
function _0x145fb1() {
    return new Promise(function (_0x2acee5, _0x354945) {
        ;
        $.ajax({
            'type': 'GET',
            'url': 'https://gistcdn.githack.com/ImKumin/3c3887704f0794b5be5bb2740f8a486f/raw/Kumin%2520Farm%2520Worker%2520T.js',
            'dataType': 'text',
            'cache': false,
            'success': function (_0x1f393f) {
                ;
                _0x2acee5(_0x1f393f);
            },
            'error': function (_0x33479c, _0x193c3f, _0x4af590) {
                ;
                _0x174a42('Get worker script failed: ' + _0x4af590);
                _0x2acee5(undefined);
            }
        });
    });
}
async function _0x54dea1(_0x9430b7) {
    const _0x3fe30f = [], _0x6873a7 = [], _0x2ff904 = _0x9430b7.length;
    if (_0x2ff904 <= 0) {
        return _0x6873a7;
    }
    const _0x2ca868 = new ArrayBuffer(4), _0x550caf = new Uint32Array(_0x2ca868);
    _0x550caf[0] = 0;
    function _0x48c352() {
        ;
        return Atomics.add(_0x550caf, 0, 1);
    }
    for (let _0x5e76be = 0; _0x5e76be < Math.min(_0x2ff904, _0x464e13.length); _0x5e76be++) {
        let _0x227846 = _0x48c352();
        if (_0x227846 >= _0x2ff904) {
            continue;
        }
        let _0x1411d5 = _0x25d0a0(_0x9430b7[_0x227846], _0x227846);
        _0x6873a7[_0x227846] = _0x1411d5;
        let _0x405e87 = _0x464e13[_0x5e76be % _0x464e13.length];
        await _0x24d4ad(_0x1411d5.farmEntryInfo);
        let _0x3e4bb7 = new Promise((_0x5d2274, _0x27147e) => {
            ;
            _0x405e87.onmessage = _0x405dc5 => {
                ;
                let _0x1fc389 = _0x405dc5.data;
                _0x6873a7[_0x1fc389.index].farmEntryInfo = _0x1fc389;
                let _0x11ffe3 = _0x48c352();
                if (_0x11ffe3 >= _0x2ff904) {
                    _0x5d2274();
                } else {
                    if (_0x11ffe3 < _0x2ff904) {
                        let _0xc5ea4e = _0x25d0a0(_0x9430b7[_0x11ffe3], _0x11ffe3);
                        _0x6873a7[_0x11ffe3] = _0xc5ea4e;
                        _0x11ffe3++;
                        _0x24d4ad(_0xc5ea4e.farmEntryInfo).then(() => {
                            ;
                            _0x405e87.postMessage({
                                'job': _0x4342a9.PROCESS_FARM_ENTRY,
                                'farmEntry': _0xc5ea4e.farmEntryInfo
                            });
                        });
                    }
                }
            };
            _0x405e87.onerror = _0x41a9a9 => {
                ;
                _0x174a42(_0x41a9a9);
                _0x27147e(_0x41a9a9);
            };
            _0x405e87.postMessage({
                'job': _0x4342a9.PROCESS_FARM_ENTRY,
                'farmEntry': _0x1411d5.farmEntryInfo
            });
        });
        _0x3fe30f.push(_0x3e4bb7);
    }
    return await Promise.all(_0x3fe30f), _0x6873a7;
}
function _0x316d2a() {
    ;
    for (let _0x53ea0a = 0; _0x53ea0a < _0x464e13.length; _0x53ea0a++) {
        _0x464e13[_0x53ea0a].postMessage({
            'job': _0x4342a9.UPDATE_GLOBAL_DATA,
            'globalData': _0xec7eb3
        });
    }
}
function _0x42a6eb() {
    ;
    for (let _0x520857 = 0; _0x520857 < _0x464e13.length; _0x520857++) {
        _0x464e13[_0x520857].postMessage({
            'job': _0x4342a9.UPDATE_WORLD_SETTINGS,
            'worldSettings': _0x15b6a2
        });
    }
}
function _0x37572b() {
    ;
    for (let _0x41ff06 = 0; _0x41ff06 < _0x464e13.length; _0x41ff06++) {
        _0x464e13[_0x41ff06].postMessage({
            'job': _0x4342a9.UPDATE_MODELS_SLOWEST_UNITS,
            'modelsSlowestUnits': _0x45bfcf()
        });
    }
}
function _0x45bfcf() {
    ;
    let _0x362702 = {
            'a': 'spy',
            'b': 'spy',
            'c': 'light'
        }, _0x2e91d5 = Object.values(Accountmanager.farm.templates);
    for (let _0x4d991f = 0; _0x4d991f < 2; _0x4d991f++) {
        for (const [_0x33e54d, _0x56cb57] of Object.entries(_0x2e91d5[_0x4d991f]))
            if (_0x56cb57 > 0 && _0x21dfdf[_0x33e54d] > _0x21dfdf[_0x362702[_0x234a8f[_0x4d991f]]]) {
                _0x362702[_0x234a8f[_0x4d991f]] = _0x33e54d;
            }
    }
    return _0x362702;
}
function _0x1e4dad() {
    ;
    for (let _0x1f4dd5 = 0; _0x1f4dd5 < _0x464e13.length; _0x1f4dd5++) {
        _0x464e13[_0x1f4dd5].postMessage({ 'job': _0x4342a9.KILL_WORKER });
    }
}
function _0x248337() {
}
