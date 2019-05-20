/***对于经常折腾的用户可以一直保留user.js
不折腾的可以把它挪开或者改名为user.js.bak之类的备用，根据ASkara轻量狂魔所说每次启动都会加载一遍，不推荐一直留着
还有还有，盒子死变态！
***/

//杂项
user_pref("plugins.navigator.hidden_ctp_plugin", "Shockwave Flash");//神奇参数，52以上有效，配合flash询问激活，一些澳门赌场上线啦的网站实现H5播放，类似navigator.plugins spoofing脚本
//https://greasyfork.org/en/scripts/6668-navigator-plugins-spoofing
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0");//UA，装逼用，我狐100.0
user_pref("gfx.content.azure.backends", "direct2d1.1,cairo");//解决辣鸡skia导致字体无法渲染
user_pref("gfx.direct2d.disabled", true);//关闭硬件加速1，mactype渲染
user_pref("layers.acceleration.disabled", true);//关闭硬件加速2
user_pref("view_source.wrap_long_lines", true);//源码自动换行
user_pref("security.block_script_with_wrong_mime", false);//开发者版和每夜版部分js不加载，其他通道不用管
user_pref("accessibility.force_disabled", 1);//和多进程(e10s)冲突
user_pref("media.autoplay.enabled", false);//H5视频自动播放
user_pref("media.block-play-until-visible", true);//延迟播放视频，直到它们可见
user_pref("browser.newtab.url", "chrome://mynewtab/content/index.html");//新标签
user_pref("browser.startup.homepage", "chrome://mynewtab/content/index.html");//主页
user_pref("browser.backspace_action", 2);//后退键 (0 = 后退, 1 = 上滚, 2 = 无动作)
user_pref("browser.bookmarks.max_backups", 0);//书签备份，压缩过的，places.sqlite就有了，0为取消
user_pref("xpinstall.signatures.required", false);//禁用扩展签名，开发者版和每夜版有效
user_pref("dom.disable_beforeunload", true);//关闭询问是否离开本站
user_pref("ui.submenuDelay", 75); // (hidden pref)/子菜单弹出时间 
user_pref("extensions.getAddons.cache.enabled", false);//获取推荐扩展
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");//服务
user_pref("security.dialog_enable_delay", 0);//扩展安装倒数时间
user_pref("extensions.greasemonkey.installDelay", 0);//猴子脚本安裝時的倒計時
user_pref("extensions.greasemonkey.stats.prompted", true);//猴子不弹改进建议提示
user_pref("extensions.greasemonkey.sync.enabled", false);//取消猴子脚本同步
user_pref("privacy.trackingprotection.enabled", true);//我狐自带跟踪保护
user_pref("privacy.donottrackheader.enabled", true);//開啟DNT
user_pref("devtools.theme", "dark");//F12暗色主题
user_pref("browser.sessionstore.interval", 6000000);//据说往SSD疯狂写入大量的数据，建议加大时间间隔，参考https://www.firefox.net.cn/read-53781
//不知如何解释
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("browser.send_pings.require_same_host", true);
user_pref("network.http.redirection-limit", 10);
user_pref("captivedetect.canonicalURL", "");
//user_pref("browser.sessionstore.privacy_level", 2);//Cookie和POST数据
//user_pref("extensions.blocklist.enabled", false);//慎用，提示flash存在安全隐患应当更新，个人建议及时更新flash
//user_pref("extensions.autoproxy.patternsbackupinterval", 0);//autoproxy备份时间
//下面两只巨坑，别作死启用
//user_pref("javascript.options.ion", false);严重降低js性能和启动速度
//user_pref("privacy.resistFingerprinting", true); //(hidden pref)flash无法播放


//插件，52以上不再支持flash以外的插件
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//flash沙盒
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);//flash崩溃报告
user_pref("dom.ipc.plugins.reportCrashURL", false);//flash崩溃报告
user_pref("plugin.state.flash", 1);//flash默认询问激活
user_pref("plugin.default.state", 0);//禁用发现新插件状态，0禁用，1询问激活，2激活
user_pref("plugin.defaultXpi.state", 0);
//user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);//临时允许运行插件时间
user_pref("security.xpconnect.plugin.unrestricted", false);//禁用不受信任XPCOM/XPConnect的脚本插件
user_pref("plugin.scan.plid.all", false);//禁用扫描插件
//下面几只最小版本号，卵用
user_pref("plugin.scan.Acrobat", "99999");
user_pref("plugin.scan.Quicktime", "99999");
user_pref("plugin.scan.WindowsMediaPlayer", "99999");

//清除历史记录，ctrl+shift+del
user_pref("privacy.cpd.cache", true);//缓存
user_pref("privacy.cpd.downloads", true);//下载历史
user_pref("privacy.cpd.formdata", true);//搜索历史
user_pref("privacy.cpd.history", true);//访问历史
user_pref("privacy.cpd.offlineApps", true);//离线数据
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", false);
user_pref("privacy.cpd.siteSettings", false);
user_pref("network.cookie.cookieBehavior", 1);//屏蔽第三方cookies

// 同步到谋智服务器
//50以上版本必须在参数webchannel.allowObject.urlWhitelist里面添加https://accounts.firefox.com.cn记得空格
user_pref("identity.fxaccounts.migrateToDevEdition", true);
user_pref("identity.fxaccounts.auth.uri", "https://api-accounts.firefox.com.cn/v1");
user_pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com.cn/force_auth?service=sync&context=fx_desktop_v3");
user_pref("identity.fxaccounts.remote.oauth.uri", "https://oauth.firefox.com.cn/v1");
user_pref("identity.fxaccounts.remote.profile.uri", "https://profile.firefox.com.cn/v1");
user_pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com.cn/signin?service=sync&context=fx_desktop_v3");
user_pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com.cn/signup?service=sync&context=fx_desktop_v3");
user_pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.firefox.com.cn/");
user_pref("identity.fxaccounts.settings.uri", "https://accounts.firefox.com.cn/settings?service=sync&context=fx_desktop_v3");
user_pref("identity.sync.tokenserver.uri", "https://sync.firefox.com.cn/token/1.0/sync/1.5");
user_pref("services.sync.fxa.privacyURL", "https://accounts.firefox.com.cn/legal/privacy");
user_pref("services.sync.fxa.termsURL", "https://accounts.firefox.com.cn/legal/terms");
user_pref("services.sync.statusURL", "https://accounts.firefox.com.cn/status/");

//一坨烦人设置，不用看，直接用
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");//欢迎页面
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.usedOnWindows10.introURL", "");//欢淫使用在win10使用辣鸡火狐
user_pref("app.update.enabled", false);//自动更新
user_pref("app.update.auto", false);//自动更新
user_pref("browser.search.update", false);//搜索引擎更新
user_pref("lightweightThemes.update.enabled", false);//轻量主题更新
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");//about:home
user_pref("browser.selfsupport.url", "");//评价
user_pref("browser.download.folderList", 2);//询问下载文件到哪里
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.hide_plugins_without_extensions", false);//禁用添加与插件无关的MIME类型
user_pref("browser.pagethumbnails.capturing_disabled", true);//(hidden pref)禁用截图最新访问页面的缩略图
user_pref("general.warnOnAboutConfig", false);//进入config的卵用警告
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭浏览器提示多个标签是否关闭
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签不关闭浏览器
user_pref("browser.tabs.animate", false);//标签动画
user_pref("browser.fullscreen.animate", false);//全屏动画
user_pref("browser.download.animateNotifications", false);//下载通知动画
user_pref("browser.fullscreen.animateUp",0);//关闭全屏时工具栏隐藏显示动画
user_pref("browser.bookmarks.showRecentlyBookmarked", false);//最近浏览的书签
user_pref("browser.search.suggest.enabled", false);//搜索建议

//遥测
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true); 
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");

//健康
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

//崩溃
user_pref("breakpad.reportURL", "");//崩溃报告
user_pref("browser.tabs.crashReporting.sendReport", false);//标签崩溃发送报告

//ssl错误报告，隐私相关
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

//easydragtogo图片文件夹，碍事
user_pref("extensions.easydragtogo.img.folder", "");
user_pref("extensions.easydragtogo.img.folder2", "");
user_pref("extensions.easydragtogo.img.folder3", "");
user_pref("extensions.easydragtogo.img.folder4", "");
user_pref("extensions.easydragtogo.saveDomainName", false);
user_pref("extensions.easydragtogo.searchbyimageUrl", "");

//dns相关，有本地dns的可以尝试关闭，部分有待商榷
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
user_pref("network.dns.get-ttl", false);
user_pref("network.dns.offline-localhost", false);
user_pref("network.dnsCacheEntries", 0);
user_pref("network.dnsCacheExpiration", 0);
user_pref("network.dnsCacheExpirationGracePeriod", 0);
user_pref("network.proxy.socks_remote_dns", true);

//辣鸡Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

//射交♂
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("reader.parse-on-load.enabled", false);//禁用阅读模式

//safebrowsing安全浏览，添堵，吔屎啦你google
user_pref("urlclassifier.gethash.timeout_ms", 50);//安全机制超时
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

//字体
user_pref("gfx.font_rendering.opentype_svg.enabled", false);//禁用SVG OpenType字体的渲染
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("font.blacklist.underline_offset", "");//隐私相关
user_pref("font.language.group", "zh-CN");//默认中文字体
user_pref("font.name.monospace.zh-CN", "微软雅黑");
user_pref("font.name.sans-serif.zh-CN", "微软雅黑");
user_pref("font.name.serif.zh-CN", "微软雅黑");
user_pref("intl.charset.detector", "ja_parallel_state_machine");//文本自动编码日文，js中文注释乱码
user_pref("intl.charset.fallback.override", "gbk");//默认中文编码

//DRM
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
user_pref("media.eme.apiVisible", false);//屏蔽网站监测DRM被禁用

//GMP(Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);//关闭gmp
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.visible", false);

//WebRTC隐私
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.default_address_only", true);

//屏幕分享、摄像头
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("camera.control.face_detection.enabled", false);

//禁用推送通知
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.userAgentID", "");

//dom & js
user_pref("dom.popup_maximum", 3);//弹窗数量
user_pref("dom.enable_performance", false);//js指纹隐私
user_pref("dom.enable_user_timing", false);//禁用timing api
user_pref("dom.enable_resource_timing", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.offline-apps.notify", true);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.battery.enabled", false);//电池信息,隐私

//VR
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);

//硬件指纹、隐私相关
user_pref("media.navigator.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
user_pref("device.sensors.enabled", false);//设备传感器api，隐私
user_pref("beacon.enabled", false);//禁用向网络服务器发送分析

//禁止自动下载一些开发者工具
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);

//狗哥家的spdy，不明所以，据说要扔掉
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);

//地址栏
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.maxRichResults", 0);//禁用位置栏下拉，隐私
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("browser.urlbar.autoFill", false);//自动填充
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autocomplete.enabled", false);//自动完成
user_pref("browser.urlbar.suggest.bookmark", false);//搜索建议书签
user_pref("browser.urlbar.suggest.history", false);//搜索建议历史
user_pref("browser.urlbar.suggest.openpage", false);//搜索建议已打开的标签

//位置信息
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false); 
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("intl.locale.matchOS", false);
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

//禁用Jumplist
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);