/**
 * 随机哥伦比娅"网站 - 前端JavaScript
 * 包含多语言支持、图片加载、自动播放等功能
 */

// 多语言字典
const translations = {
    'zh-CN': {
        'loading': '加载中...',
        'change': '换一张',
        'autoplay': '自动播放',
        'view': '查看原图',
        'upload': '上传',
        'music': '音乐',
        'lang': '语言',
        'upload-title': '上传图片',
        'upload-hint': '点击或拖拽图片到此处',
        'uploading': '上传中...',
        'submit-upload': '提交上传',
        'cancel': '取消',
        'footer-text': '这是一个粉丝向的同人图库网站',
        'copyright': '侵权投诉邮箱：',
        'upload-success': '上传成功，等待审核',
        'upload-failed': '上传失败',
        'file-too-large': '文件大小超过限制（最大30MB）',
        'file-not-allowed': '不支持的文件类型，只允许：jpg, jpeg, png, gif, webp',
        'image-similar': '该图片与已存在的图片过于相似，请上传其他图片',
        'no-image': '暂无可用图片',
        'autoplay-start': '自动播放已启动',
        'autoplay-stop': '自动播放已停止',
        'upload-error': '上传错误',
        'network-error': '网络错误，请重试'
    },
    'ja': {
        'loading': '読み込み中...',
        'change': '一枚替える',
        'autoplay': '自動再生',
        'view': '原図を見る',
        'upload': 'アップロード',
        'music': '音楽',
        'lang': '言語',
        'upload-title': '画像をアップロード',
        'upload-hint': 'ここをクリックまたは画像をドラッグ',
        'uploading': 'アップロード中...',
        'submit-upload': '送信',
        'cancel': 'キャンセル',
        'footer-text': 'これはファンメイドの同人画像サイトです',
        'copyright': '権利侵害の苦情メール：',
        'upload-success': 'アップロード成功、審査待ち',
        'upload-failed': 'アップロード失敗',
        'file-too-large': 'ファイルサイズが制限を超えています（最大30MB）',
        'file-not-allowed': '対応していないファイル形式、jpg, jpeg, png, gif, webpのみ',
        'image-similar': 'この画像は既存の画像と似すぎます、他の画像をアップロードしてください',
        'no-image': '利用可能な画像がありません',
        'autoplay-start': '自動再生を開始しました',
        'autoplay-stop': '自動再生を停止しました',
        'upload-error': 'アップロードエラー',
        'network-error': 'ネットワークエラー、再試行してください'
    },
    'en': {
        'loading': 'Loading...',
        'change': 'Change',
        'autoplay': 'Autoplay',
        'view': 'View Original',
        'upload': 'Upload',
        'music': 'Music',
        'lang': 'Language',
        'upload-title': 'Upload Image',
        'upload-hint': 'Click or drag image here',
        'uploading': 'Uploading...',
        'submit-upload': 'Submit',
        'cancel': 'Cancel',
        'footer-text': 'This is a fan-made fan art website',
        'copyright': 'Copyright complaint email:',
        'upload-success': 'Upload successful, pending review',
        'upload-failed': 'Upload failed',
        'file-too-large': 'File size exceeds limit (max 30MB)',
        'file-not-allowed': 'Unsupported file type, only: jpg, jpeg, png, gif, webp',
        'image-similar': 'This image is too similar to existing images, please upload another',
        'no-image': 'No available images',
        'autoplay-start': 'Autoplay started',
        'autoplay-stop': 'Autoplay stopped',
        'upload-error': 'Upload error',
        'network-error': 'Network error, please try again'
    },
    'de': {
        'loading': 'Laden...',
        'change': 'Wechseln',
        'autoplay': 'Automatisch abspielen',
        'view': 'Original anzeigen',
        'upload': 'Hochladen',
        'music': 'Musik',
        'lang': 'Sprache',
        'upload-title': 'Bild hochladen',
        'upload-hint': 'Klicken oder Bild hierher ziehen',
        'uploading': 'Hochladen...',
        'submit-upload': 'Absenden',
        'cancel': 'Abbrechen',
        'footer-text': 'Dies ist eine von Fans erstellte Fan-Art-Website',
        'copyright': 'Urheberrechts-Beschwerde-E-Mail:',
        'upload-success': 'Upload erfolgreich, Wartung auf Freigabe',
        'upload-failed': 'Upload fehlgeschlagen',
        'file-too-large': 'Dateigröße überschreitet Limit (max 30MB)',
        'file-not-allowed': 'Nicht unterstützter Dateityp, nur: jpg, jpeg, png, gif, webp',
        'image-similar': 'Dieses Bild ist zu ähnlich wie vorhandene Bilder, bitte laden Sie ein anderes hoch',
        'no-image': 'Keine verfügbaren Bilder',
        'autoplay-start': 'Automatische Wiedergabe gestartet',
        'autoplay-stop': 'Automatische Wiedergabe gestoppt',
        'upload-error': 'Upload-Fehler',
        'network-error': 'Netzwerkfehler, bitte versuchen Sie es erneut'
    },
    'fr': {
        'loading': 'Chargement...',
        'change': 'Changer',
        'autoplay': 'Lecture automatique',
        'view': 'Voir l\'original',
        'upload': 'Télécharger',
        'music': 'Musique',
        'lang': 'Langue',
        'upload-title': 'Télécharger une image',
        'upload-hint': 'Cliquez ou faites glisser une image ici',
        'uploading': 'Téléchargement...',
        'submit-upload': 'Soumettre',
        'cancel': 'Annuler',
        'footer-text': 'Ceci est un site d\'art de fan créé par des fans',
        'copyright': 'E-mail de plainte pour violation des droits d\'auteur:',
        'upload-success': 'Téléchargement réussi, en attente de révision',
        'upload-failed': 'Échec du téléchargement',
        'file-too-large': 'La taille du fichier dépasse la limite (max 30MB)',
        'file-not-allowed': 'Type de fichier non supporté, seulement: jpg, jpeg, png, gif, webp',
        'image-similar': 'Cette image est trop similaire aux images existantes, veuillez en télécharger une autre',
        'no-image': 'Aucune image disponible',
        'autoplay-start': 'Lecture automatique démarrée',
        'autoplay-stop': 'Lecture automatique arrêtée',
        'upload-error': 'Erreur de téléchargement',
        'network-error': 'Erreur réseau, veuillez réessayer'
    },
    'ko': {
        'loading': '로딩 중...',
        'change': '바꾸기',
        'autoplay': '자동 재생',
        'view': '원본 보기',
        'upload': '업로드',
        'music': '음악',
        'lang': '언어',
        'upload-title': '이미지 업로드',
        'upload-hint': '클릭하거나 이미지를 여기로 드래그하세요',
        'uploading': '업로드 중...',
        'submit-upload': '제출',
        'cancel': '취소',
        'footer-text': '이것은 팬들이 만든 팬 아트 웹사이트입니다',
        'copyright': '저작권 침해 이메일:',
        'upload-success': '업로드 성공, 심사 대기 중',
        'upload-failed': '업로드 실패',
        'file-too-large': '파일 크기가 제한을 초과했습니다 (최대 30MB)',
        'file-not-allowed': '지원되지 않는 파일 형식, jpg, jpeg, png, gif, webp만',
        'image-similar': '이 이미지는 기존 이미지와 너무 유사합니다, 다른 이미지를 업로드해주세요',
        'no-image': '사용 가능한 이미지가 없습니다',
        'autoplay-start': '자동 재생이 시작되었습니다',
        'autoplay-stop': '자동 재생이 중지되었습니다',
        'upload-error': '업로드 오류',
        'network-error': '네트워크 오류, 다시 시도해주세요'
    },
    'ru': {
        'loading': 'Загрузка...',
        'change': 'Сменить',
        'autoplay': 'Автовоспроизведение',
        'view': 'Посмотреть оригинал',
        'upload': 'Загрузить',
        'music': 'Музыка',
        'lang': 'Язык',
        'upload-title': 'Загрузить изображение',
        'upload-hint': 'Нажмите или перетащите изображение сюда',
        'uploading': 'Загрузка...',
        'submit-upload': 'Отправить',
        'cancel': 'Отмена',
        'footer-text': 'Это фан-сайт фан-арта, созданный фанатами',
        'copyright': 'Электронная почта для жалоб на нарушение авторских прав:',
        'upload-success': 'Загрузка успешна, ожидает проверки',
        'upload-failed': 'Загрузка не удалась',
        'file-too-large': 'Размер файла превышает лимит (максимум 30MB)',
        'file-not-allowed': 'Неподдерживаемый тип файла, только: jpg, jpeg, png, gif, webp',
        'image-similar': 'Это изображение слишком похоже на существующие, пожалуйста, загрузите другое',
        'no-image': 'Нет доступных изображений',
        'autoplay-start': 'Автовоспроизведение запущено',
        'autoplay-stop': 'Автовоспроизведение остановлено',
        'upload-error': 'Ошибка загрузки',
        'network-error': 'Ошибка сети, пожалуйста, попробуйте снова'
    },
    'la': {
        'loading': 'Cargans...',
        'change': 'Mutare',
        'autoplay': 'Ludus automatica',
        'view': 'Videre originale',
        'upload': 'Onerare',
        'music': 'Musica',
        'lang': 'Lingua',
        'upload-title': 'Onerare imaginem',
        'upload-hint': 'Clic aut trahite imaginem hic',
        'uploading': 'Onerens...',
        'submit-upload': 'Mittere',
        'cancel': 'Cancellare',
        'footer-text': 'Hic est situs artis fan factus a fanibus',
        'copyright': 'Epistula querelarum de querelis de iure auctoris:',
        'upload-success': 'Oneres successus, expectans probationem',
        'upload-failed': 'Oneres non successit',
        'file-too-large': 'Magnitudo liminis excedit (maximam 30MB)',
        'file-not-allowed': 'Typus non supportus, tantum: jpg, jpeg, png, gif, webp',
        'image-similar': 'Haec imago nimis similis ad existens, quaeso aliam onerare',
        'no-image': 'Nullae imagines disponibiles',
        'autoplay-start': 'Ludus automatica incepta',
        'autoplay-stop': 'Ludus automatica stoppa',
        'upload-error': 'Error onerendi',
        'network-error': 'Error retis, quaeso conare'
    }
};

// 当前语言
let currentLang = localStorage.getItem('lang') || 'zh-CN';

// 自动播放状态
let isAutoplaying = false;
let autoplayInterval = null;
let autoplayDelay = 13000; // 自动播放间隔（毫秒）

// DOM元素
const mainImage = document.getElementById('main-image');
const loading = document.getElementById('loading');
const imageWrapper = document.getElementById('image-wrapper');
const btnChange = document.getElementById('btn-change');
const btnAutoplay = document.getElementById('btn-autoplay');
const btnView = document.getElementById('btn-view');
const btnUpload = document.getElementById('btn-upload');
const btnMusic = document.getElementById('btn-music');
const btnLang = document.getElementById('btn-lang');
const langMenu = document.getElementById('lang-menu');
const uploadModal = document.getElementById('upload-modal');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const uploadInfo = document.getElementById('upload-info');
const uploadProgress = document.getElementById('upload-progress');
const uploadProgressFill = document.getElementById('upload-progress-fill');
const uploadStatus = document.getElementById('upload-status');
const bgMusic = document.getElementById('bg-music');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始语言
    setLanguage(currentLang);
    
    // 加载第一张图片
    loadRandomImage();
    
    // 绑定事件监听器
    bindEventListeners();
});

/**
 * 绑定所有事件监听器
 */
function bindEventListeners() {
    // 换一张按钮
    btnChange.addEventListener('click', loadRandomImage);
    
    // 自动播放按钮
    btnAutoplay.addEventListener('click', toggleAutoplay);
    
    // 查看原图按钮
    btnView.addEventListener('click', viewOriginalImage);
    
    // 上传按钮
    btnUpload.addEventListener('click', openUploadModal);
    
    // 音乐按钮
    btnMusic.addEventListener('click', toggleMusic);
    
    // 语言按钮
    btnLang.addEventListener('click', toggleLanguageMenu);
    
    // 语言选择
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // 上传区域
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    
    // 模态框关闭
    document.getElementById('close-upload').addEventListener('click', closeUploadModal);
    document.getElementById('btn-cancel-upload').addEventListener('click', closeUploadModal);
    document.getElementById('btn-submit-upload').addEventListener('click', submitUpload);
    
    // 点击模态框外部关闭
    uploadModal.addEventListener('click', function(e) {
        if (e.target === uploadModal) {
            closeUploadModal();
        }
    });
}

/**
 * 设置语言
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // 更新页面文本
    updateLanguageText();
    
    // 更新HTML lang属性
    document.documentElement.lang = lang;
}

/**
 * 更新所有多语言文本
 */
function updateLanguageText() {
    const t = translations[currentLang];
    
    // 更新带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

/**
 * 加载随机图片
 */
async function loadRandomImage() {
    try {
        // 显示加载动画
        loading.classList.remove('hidden');
        mainImage.classList.add('hidden');
        
        // 添加切换动画
        mainImage.classList.add('changing');
        
        // 请求随机图片API
        const response = await fetch('/api/random');
        const data = await response.json();
        
        if (data.success && data.data) {
            // 预加载图片
            const img = new Image();
            img.onload = function() {
                // 隐藏加载动画
                loading.classList.add('hidden');
                
                // 设置图片源
                mainImage.src = data.data.url;
                mainImage.classList.remove('hidden');
                
                // 移除切换动画
                setTimeout(() => {
                    mainImage.classList.remove('changing');
                }, 500);
            };
            img.onerror = function() {
                loading.classList.add('hidden');
                showMessage(translations[currentLang]['network-error'], 'error');
            };
            img.src = data.data.url;
        } else {
            loading.classList.add('hidden');
            showMessage(translations[currentLang]['no-image'], 'error');
        }
    } catch (error) {
        loading.classList.add('hidden');
        showMessage(translations[currentLang]['network-error'], 'error');
        console.error('加载图片失败：', error);
    }
}

/**
 * 切换自动播放
 */
function toggleAutoplay() {
    isAutoplaying = !isAutoplaying;
    
    if (isAutoplaying) {
        // 开始自动播放
        btnAutoplay.classList.add('active');
        showMessage(translations[currentLang]['autoplay-start'], 'success');
        
        // 立即加载下一张
        loadRandomImage();
        
        // 设置定时器
        autoplayInterval = setInterval(() => {
            loadRandomImage();
        }, autoplayDelay);
    } else {
        // 停止自动播放
        btnAutoplay.classList.remove('active');
        showMessage(translations[currentLang]['autoplay-stop'], 'success');
        
        // 清除定时器
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
}

/**
 * 查看原图
 */
function viewOriginalImage() {
    const currentSrc = mainImage.src;
    if (currentSrc) {
        // 在新窗口打开原图
        window.open(currentSrc, '_blank');
    }
}

/**
 * 打开上传模态框
 */
function openUploadModal() {
    uploadModal.classList.add('show');
    // 重置上传状态
    resetUploadState();
}

/**
 * 关闭上传模态框
 */
function closeUploadModal() {
    uploadModal.classList.remove('show');
    resetUploadState();
}

/**
 * 重置上传状态
 */
function resetUploadState() {
    fileInput.value = '';
    uploadInfo.classList.add('hidden');
    uploadProgress.classList.add('hidden');
    uploadProgressFill.style.width = '0%';
    uploadStatus.textContent = translations[currentLang]['upload-hint'];
}

/**
 * 处理拖拽悬停
 */
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.add('dragover');
}

/**
 * 处理拖拽离开
 */
function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
}

/**
 * 处理文件拖放
 */
function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

/**
 * 处理文件选择
 */
function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

/**
 * 处理文件
 */
function handleFile(file) {
    // 检查文件类型
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
        showMessage(translations[currentLang]['file-not-allowed'], 'error');
        return;
    }
    
    // 检查文件大小（30MB）
    const maxSize = 30 * 1024 * 1024;
    if (file.size > maxSize) {
        showMessage(translations[currentLang]['file-too-large'], 'error');
        return;
    }
    
    // 显示文件信息
    uploadInfo.classList.remove('hidden');
    document.getElementById('upload-filename').textContent = file.name;
    document.getElementById('upload-size').textContent = formatFileSize(file.size);
    
    // 存储文件
    window.selectedFile = file;
}

/**
 * 格式化文件大小
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const m = k * 1024;
    const g = m * 1024;
    
    if (bytes < k) {
        return bytes + ' Bytes';
    } else if (bytes < m) {
        return (bytes / k).toFixed(2) + ' KB';
    } else if (bytes < g) {
        return (bytes / m).toFixed(2) + ' MB';
    } else {
        return (bytes / g).toFixed(2) + ' GB';
    }
}

/**
 * 提交上传
 */
async function submitUpload() {
    if (!window.selectedFile) {
        showMessage(translations[currentLang]['upload-error'], 'error');
        return;
    }
    
    try {
        // 显示上传进度
        uploadProgress.classList.remove('hidden');
        uploadStatus.textContent = translations[currentLang]['uploading'];
        
        // 创建FormData
        const formData = new FormData();
        formData.append('file', window.selectedFile);
        
        // 创建XMLHttpRequest以跟踪上传进度
        const xhr = new XMLHttpRequest();
        
        // 监听上传进度
        xhr.upload.addEventListener('progress', function(e) {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                uploadProgressFill.style.width = percentComplete + '%';
            }
        });
        
        // 监听上传完成
        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        showMessage(translations[currentLang]['upload-success'], 'success');
                        closeUploadModal();
                    } else {
                        showMessage(response.message || translations[currentLang]['upload-failed'], 'error');
                    }
                } catch (e) {
                    showMessage(translations[currentLang]['upload-failed'], 'error');
                }
            } else {
                showMessage(translations[currentLang]['upload-failed'], 'error');
            }
        });
        
        // 监听上传错误
        xhr.addEventListener('error', function() {
            showMessage(translations[currentLang]['upload-error'], 'error');
        });
        
        // 发送请求
        xhr.open('POST', '/api/upload');
        xhr.send(formData);
        
    } catch (error) {
        showMessage(translations[currentLang]['upload-error'], 'error');
        console.error('上传失败：', error);
    }
}

/**
 * 切换语言菜单
 */
function toggleLanguageMenu() {
    langMenu.classList.toggle('show');
}

/**
 * 切换音乐
 */
function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        btnMusic.classList.add('active');
    } else {
        bgMusic.pause();
        btnMusic.classList.remove('active');
    }
}

/**
 * 显示消息提示
 */
function showMessage(message, type = 'success') {
    // 移除现有消息
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建新消息
    const messageDiv = document.createElement('div');
    messageDiv.className = type + '-message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

/**
 * 键盘快捷键
 */
document.addEventListener('keydown', function(e) {
    // 空格键：换一张
    if (e.code === 'Space' && !uploadModal.classList.contains('show')) {
        e.preventDefault();
        loadRandomImage();
    }
    
    // ESC键：关闭模态框
    if (e.code === 'Escape' && uploadModal.classList.contains('show')) {
        e.preventDefault();
        closeUploadModal();
    }
    
    // M键：切换音乐
    if (e.code === 'KeyM' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        toggleMusic();
    }
    
    // A键：自动播放
    if (e.code === 'KeyA' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        toggleAutoplay();
    }
});
