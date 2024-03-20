(() => {
  const e = new class {
    constructor() { this.boardSize = 8, this.container = null, this.boardEl = null, this.cells = [], this.cellClickListeners = [], this.cellEnterListeners = [], this.cellLeaveListeners = [], this.newGameListeners = [], this.saveGameListeners = [], this.loadGameListeners = []; }

    bindToDOM(e) { if (!(e instanceof HTMLElement)) throw new Error('container is not HTMLElement'); this.container = e; }

    drawUi(e) { this.checkBinding(), this.container.innerHTML = '\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ', this.newGameEl = this.container.querySelector('[data-id=action-restart]'), this.saveGameEl = this.container.querySelector('[data-id=action-save]'), this.loadGameEl = this.container.querySelector('[data-id=action-load]'), this.newGameEl.addEventListener('click', ((e) => this.onNewGameClick(e))), this.saveGameEl.addEventListener('click', ((e) => this.onSaveGameClick(e))), this.loadGameEl.addEventListener('click', ((e) => this.onLoadGameClick(e))), this.boardEl = this.container.querySelector('[data-id=board]'), this.boardEl.classList.add(e); for (let e = 0; e < this.boardSize ** 2; e += 1) { const e = document.createElement('div'); e.classList.add('cell', 'map-tile', `map-tile-${this.boardSize, 'center'}`), e.addEventListener('mouseenter', ((e) => this.onCellEnter(e))), e.addEventListener('mouseleave', ((e) => this.onCellLeave(e))), e.addEventListener('click', ((e) => this.onCellClick(e))), this.boardEl.appendChild(e); } this.cells = Array.from(this.boardEl.children); }

    redrawPositions(e) { for (const e of this.cells)e.innerHTML = ''; for (const s of e) { const e = this.boardEl.children[s.position]; const a = document.createElement('div'); a.classList.add('character', s.character.type); const l = document.createElement('div'); l.classList.add('health-level'); const i = document.createElement('div'); i.classList.add('health-level-indicator', `health-level-indicator-${(t = s.character.health) < 15 ? 'critical' : t < 50 ? 'normal' : 'high'}`), i.style.width = `${s.character.health}%`, l.appendChild(i), a.appendChild(l), e.appendChild(a); } let t; }

    addCellEnterListener(e) { this.cellEnterListeners.push(e); }

    addCellLeaveListener(e) { this.cellLeaveListeners.push(e); }

    addCellClickListener(e) { this.cellClickListeners.push(e); }

    addNewGameListener(e) { this.newGameListeners.push(e); }

    addSaveGameListener(e) { this.saveGameListeners.push(e); }

    addLoadGameListener(e) { this.loadGameListeners.push(e); }

    onCellEnter(e) { e.preventDefault(); const t = this.cells.indexOf(e.currentTarget); this.cellEnterListeners.forEach(((e) => e.call(null, t))); }

    onCellLeave(e) { e.preventDefault(); const t = this.cells.indexOf(e.currentTarget); this.cellLeaveListeners.forEach(((e) => e.call(null, t))); }

    onCellClick(e) { const t = this.cells.indexOf(e.currentTarget); this.cellClickListeners.forEach(((e) => e.call(null, t))); }

    onNewGameClick(e) { e.preventDefault(), this.newGameListeners.forEach(((e) => e.call(null))); }

    onSaveGameClick(e) { e.preventDefault(), this.saveGameListeners.forEach(((e) => e.call(null))); }

    onLoadGameClick(e) { e.preventDefault(), this.loadGameListeners.forEach(((e) => e.call(null))); }

    static showError(e) { alert(e); }

    static showMessage(e) { alert(e); }

    selectCell(e, t = 'yellow') { this.deselectCell(e), this.cells[e].classList.add('selected', `selected-${t}`); }

    deselectCell(e) { const t = this.cells[e]; t.classList.remove(...Array.from(t.classList).filter(((e) => e.startsWith('selected')))); }

    showCellTooltip(e, t) { this.cells[t].title = e; }

    hideCellTooltip(e) { this.cells[e].title = ''; }

    showDamage(e, t) { return new Promise(((s) => { const a = this.cells[e]; const l = document.createElement('span'); l.textContent = t, l.classList.add('damage'), a.appendChild(l), l.addEventListener('animationend', (() => { a.removeChild(l), s(); })); })); }

    setCursor(e) { this.boardEl.style.cursor = e; }

    checkBinding() { if (this.container === null) throw new Error('GamePlay not bind to DOM'); }
  }(); e.bindToDOM(document.querySelector('#game-container')); const t = new class {
    constructor(e) { this.storage = e; }

    save(e) { this.storage.setItem('state', JSON.stringify(e)); }

    load() { try { return JSON.parse(this.storage.getItem('state')); } catch (e) { throw new Error('Invalid state'); } }
  }(localStorage); const s = new class {
    constructor(e, t) { this.gamePlay = e, this.stateService = t; }

    init() { this.gamePlay.drawUi('prairie'); }

    onCellClick(e) {}

    onCellEnter(e) {}

    onCellLeave(e) {}
  }(e, t); s.init();
})();
