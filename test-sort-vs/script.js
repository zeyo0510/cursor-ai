// 變數
let leftArray = [];
let rightArray = [];
let leftSorting = false;
let rightSorting = false;
let delay = 100;
let leftComparisons = 0;
let leftSwaps = 0;
let rightComparisons = 0;
let rightSwaps = 0;
let leftStartTime = 0;
let rightStartTime = 0;

// DOM元素
const arraySizeSelect = document.getElementById('arraySize');
const speedControl    = document.getElementById('speed-slider');
const speedInfo       = document.getElementById("speed-info");
const generateBtn     = document.getElementById('generate-button');
const startButton     = document.getElementById('start-button');
const stopButton      = document.getElementById('stop-button');

const leftArrayContainer     = document.getElementById('leftArrayContainer');
const leftAlgorithmSelect    = document.getElementById('leftAlgorithm');
const leftStopBtn            = document.getElementById('leftStopBtn');
const leftStatusDisplay      = document.getElementById('leftStatus');
const leftComparisonsDisplay = document.getElementById('leftComparisons');
const leftSwapsDisplay       = document.getElementById('leftSwaps');
const leftTimeDisplay        = document.getElementById('leftTime');

const rightArrayContainer     = document.getElementById('rightArrayContainer');
const rightAlgorithmSelect    = document.getElementById('rightAlgorithm');
const rightStopBtn            = document.getElementById('rightStopBtn');
const rightStatusDisplay      = document.getElementById('rightStatus');
const rightComparisonsDisplay = document.getElementById('rightComparisons');
const rightSwapsDisplay       = document.getElementById('rightSwaps');
const rightTimeDisplay        = document.getElementById('rightTime');

// 事件監聽器
generateBtn.addEventListener('click', generateNewArrays);
arraySizeSelect.addEventListener('change', generateNewArrays);
speedControl.addEventListener('input', updateSpeed);
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

// 初始化
generateNewArrays();
/************************************************/
// 函數
function generateNewArrays() {
  if (leftSorting || rightSorting) {
    alert('請先停止正在進行的排序!');
    return;
  }
  /************************************************/
  const arraySize = parseInt(arraySizeSelect.value);
  const maxHeight = 200;
  /************************************************/
  // 產生隨機陣列
  const newArray = [];
  for (let i = 0; i < arraySize; i++) {
    newArray.push(Math.floor(Math.random() * maxHeight) + 10);
  }
  /************************************************/
  // 左右面板使用相同的初始陣列(複製)
  leftArray = [...newArray];
  rightArray = [...newArray];
  /************************************************/  
  renderArray(leftArray, leftArrayContainer);
  renderArray(rightArray, rightArrayContainer);
  /************************************************/
  resetStats();
}
/************************************************/
function renderArray(arr, container) {
  container.innerHTML = '';
  /************************************************/
  const maxHeight = Math.max(...arr);
  const barWidth = Math.max(3, (container.clientWidth / arr.length) - 2);
  /************************************************/
  arr.forEach((value, index) => {
      const bar = document.createElement('span');
      bar.className = 'array-bar';
      bar.style.height = `${(value / maxHeight) * 100}%`;
      bar.style.width = `${barWidth}px`;
      
      // 如果陣列不大於30，顯示數值標籤
      if (arr.length < 30) {
          const label = document.createElement('span');
          label.textContent = value;
          label.style.position = 'absolute';
          label.style.top = '-25px';
          label.style.width = '100%';
          label.style.textAlign = 'center';
          label.style.fontSize = '12px';
          bar.appendChild(label);
      }
      
      container.appendChild(bar);
  });
}
/************************************************/
function resetStats() {
  // 重置左面板統計
  leftComparisons = 0;
  leftSwaps = 0;
  leftComparisonsDisplay.textContent = leftComparisons;
  leftSwapsDisplay.textContent = leftSwaps;
  leftTimeDisplay.textContent = '0 ms';
  leftStatusDisplay.textContent = '準備就緒';
  
  // 重置右面板統計
  rightComparisons = 0;
  rightSwaps = 0;
  rightComparisonsDisplay.textContent = rightComparisons;
  rightSwapsDisplay.textContent = rightSwaps;
  rightTimeDisplay.textContent = '0 ms';
  rightStatusDisplay.textContent = '準備就緒';
}
/************************************************/
function updateSpeed() {
    // 將滑桿值(1-100)映射到延遲範圍(10-500ms)
    delay = 510 - (speedControl.value * 5);

    speedInfo.textContent = `${delay} ms`;
}
/************************************************/
// 排序算法實現
const sortingAlgorithms = {
    // 泡沫排序
    async bubbleSort(arr, container, stats) {
        let n = arr.length;
        let swapped;
        
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (!stats.sorting) return arr;
                
                // 高亮比較的元素
                const bars = container.querySelectorAll('.array-bar');
                bars[i].classList.add('comparing');
                bars[i+1].classList.add('comparing');
                
                stats.comparisons++;
                stats.updateDisplay();
                
                await sleep(delay/2);
                
                if (arr[i] > arr[i+1]) {
                    // 高亮交換的元素
                    bars[i].classList.remove('comparing');
                    bars[i+1].classList.remove('comparing');
                    bars[i].classList.add('swapping');
                    bars[i+1].classList.add('swapping');
                    
                    await sleep(delay/2);
                    
                    // 交換元素
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    stats.swaps++;
                    stats.updateDisplay();
                    swapped = true;
                    
                    // 更新可視化
                    renderArray(arr, container);
                    await sleep(delay);
                } else {
                    // 只是比較，不需要交換
                    await sleep(delay/2);
                    bars[i].classList.remove('comparing');
                    bars[i+1].classList.remove('comparing');
                }
            }
            n--;
            
            // 標記最後一個元素為已排序
            if (stats.sorting && n >= 0) {
                const bars = container.querySelectorAll('.array-bar');
                bars[n].classList.add('sorted');
            }
        } while (swapped && stats.sorting);
        
        return arr;
    },
    
    // 插入排序
    async insertionSort(arr, container, stats) {
        const n = arr.length;
        
        for (let i = 1; i < n; i++) {
            if (!stats.sorting) return arr;
            
            // 高亮當前關鍵元素
            const bars = container.querySelectorAll('.array-bar');
            bars[i].classList.add('key');
            
            let key = arr[i];
            let j = i - 1;
            
            // 可視化等待
            await sleep(delay/2);
            
            while (j >= 0 && arr[j] > key) {
                if (!stats.sorting) return arr;
                
                // 高亮比較
                bars[j].classList.add('comparing');
                
                stats.comparisons++;
                stats.updateDisplay();
                
                await sleep(delay/2);
                
                // 移動元素
                arr[j + 1] = arr[j];
                stats.swaps++;
                stats.updateDisplay();
                
                // 更新可視化
                renderArray(arr, container);
                
                // 重新高亮關鍵位置
                const newBars = container.querySelectorAll('.array-bar');
                newBars[j+1].classList.add('key');
                if (j >= 0) newBars[j].classList.add('comparing');
                
                await sleep(delay/2);
                
                j--;
            }
            
            arr[j + 1] = key;
            stats.swaps++;
            stats.updateDisplay();
            
            // 更新可視化
            renderArray(arr, container);
            
            // 標記已排序部分
            for (let k = 0; k <= i; k++) {
                const bars = container.querySelectorAll('.array-bar');
                bars[k].classList.add('sorted');
            }
        }
        
        return arr;
    },
    
    // 選擇排序
    async selectionSort(arr, container, stats) {
        const n = arr.length;
        
        for (let i = 0; i < n-1; i++) {
            if (!stats.sorting) return arr;
            
            // 高亮當前位置
            const bars = container.querySelectorAll('.array-bar');
            bars[i].classList.add('comparing');
            
            let minIndex = i;
            
            for (let j = i+1; j < n; j++) {
                if (!stats.sorting) return arr;
                
                // 高亮比較的元素
                bars[j].classList.add('key');
                
                stats.comparisons++;
                stats.updateDisplay();
                
                await sleep(delay/2);
                
                if (arr[j] < arr[minIndex]) {
                    // 移除之前的最小值高亮
                    if (minIndex !== i) {
                        bars[minIndex].classList.remove('swapping');
                    }
                    minIndex = j;
                    bars[minIndex].classList.add('swapping');
                }
                
                // 移除當前高亮
                bars[j].classList.remove('key');
                
                await sleep(delay/2);
            }
            
            if (minIndex !== i) {
                // 高亮交換的元素
                bars[i].classList.add('swapping');
                bars[minIndex].classList.add('swapping');
                
                await sleep(delay);
                
                // 交換元素
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                stats.swaps++;
                stats.updateDisplay();
                
                // 更新可視化
                renderArray(arr, container);
                
                await sleep(delay);
            }
            
            // 標記已排序位置
            bars[i].classList.remove('comparing', 'swapping');
            bars[i].classList.add('sorted');
        }
        
        // 標記最後一個元素為已排序
        if (stats.sorting && n > 0) {
            const bars = container.querySelectorAll('.array-bar');
            bars[n-1].classList.add('sorted');
        }
        
        return arr;
    },
    
    // 合併排序
    async mergeSort(arr, container, stats) {
        async function merge(left, right, startIdx) {
            let result = [];
            let leftIdx = 0;
            let rightIdx = 0;
            
            while (leftIdx < left.length && rightIdx < right.length) {
                if (!stats.sorting) return [];
                
                stats.comparisons++;
                stats.updateDisplay();
                
                await sleep(delay);
                
                if (left[leftIdx] < right[rightIdx]) {
                    result.push(left[leftIdx++]);
                } else {
                    result.push(right[rightIdx++]);
                }
            }
            
            return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
        }
        
        async function sort(arr, startIdx = 0) {
            if (arr.length <= 1) return arr;
            
            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);
            
            // 可視化分割
            const bars = container.querySelectorAll('.array-bar');
            for (let i = startIdx; i < startIdx + arr.length; i++) {
                bars[i].classList.add('comparing');
            }
            await sleep(delay);
            for (let i = startIdx; i < startIdx + arr.length; i++) {
                bars[i].classList.remove('comparing');
            }
            
            const sortedLeft = await sort(left, startIdx);
            const sortedRight = await sort(right, startIdx + mid);
            
            const merged = await merge(sortedLeft, sortedRight, startIdx);
            
            // 更新合併後的陣列
            for (let i = 0; i < merged.length; i++) {
                arr[i] = merged[i];
            }
            
            // 更新可視化
            const newArr = [...leftArray];
            if (container === leftArrayContainer) {
                leftArray = newArr;
            } else {
                rightArray = newArr;
            }
            renderArray(newArr, container);
            await sleep(delay);
            
            return arr;
        }
        
        return await sort([...arr]);
    },
    
    // 快速排序
    async quickSort(arr, container, stats) {
        async function partition(low, high) {
            const pivot = arr[high];
            let i = low - 1;
            
            // 高亮基準值
            const bars = container.querySelectorAll('.array-bar');
            bars[high].classList.add('pivot');
            
            for (let j = low; j < high; j++) {
                if (!stats.sorting) return -1;
                
                // 高亮比較的元素
                bars[j].classList.add('comparing');
                
                stats.comparisons++;
                stats.updateDisplay();
                
                await sleep(delay/2);
                
                if (arr[j] < pivot) {
                    i++;
                    
                    if (i !== j) {
                        // 高亮交換的元素
                        bars[i].classList.add('swapping');
                        bars[j].classList.add('swapping');
                        
                        await sleep(delay/2);
                        
                        // 交換元素
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        stats.swaps++;
                        stats.updateDisplay();
                        
                        // 更新可視化
                        renderArray(arr, container);
                        
                        await sleep(delay);
                        
                        // 移除交換高亮
                        bars[i].classList.remove('swapping');
                        bars[j].classList.remove('swapping');
                    }
                }
                
                // 移除比較高亮
                bars[j].classList.remove('comparing');
            }
            
            // 交換基準值到正確位置
            if (i+1 !== high) {
                bars[i+1].classList.add('swapping');
                bars[high].classList.add('swapping');
                
                await sleep(delay);
                
                [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
                stats.swaps++;
                stats.updateDisplay();
                
                // 更新可視化
                renderArray(arr, container);
            }
            
            // 移除所有高亮
            bars[high].classList.remove('pivot');
            if (bars[i+1]) bars[i+1].classList.remove('swapping');
            
            return i + 1;
        }
        
        async function sort(low, high) {
            if (low < high) {
                const pi = await partition(low, high);
                
                if (pi === -1) return; // 排序被停止
                
                // 標記基準值位置為已排序
                const bars = container.querySelectorAll('.array-bar');
                bars[pi].classList.add('sorted');
                
                await sort(low, pi - 1);
                await sort(pi + 1, high);
            } else if (low === high) {
                // 標記單個元素為已排序
                const bars = container.querySelectorAll('.array-bar');
                bars[low].classList.add('sorted');
            }
        }
        
        await sort(0, arr.length - 1);
        return arr;
    },
    
    // 希爾排序
    async shellSort(arr, container, stats) {
        let n = arr.length;
        
        // 從大間隔開始，然後縮小間隔
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
            stats.status = `排序中 (間隔 ${gap})...`;
            stats.updateDisplay();
            
            // 對這個間隔大小進行間隔插入排序
            for (let i = gap; i < n; i++) {
                if (!stats.sorting) return arr;
                
                // 高亮當前元素和它的比較元素
                const bars = container.querySelectorAll('.array-bar');
                bars[i].classList.add('comparing');
                if (i-gap >= 0) bars[i-gap].classList.add('gap');
                
                // 可視化等待
                await sleep(delay);
                
                let temp = arr[i];
                let j;
                
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    stats.comparisons++;
                    stats.updateDisplay();
                    
                    // 高亮比較
                    if (j-gap >= 0) {
                        bars[j-gap].classList.add('comparing');
                        await sleep(delay);
                        bars[j-gap].classList.remove('comparing');
                    }
                    
                    arr[j] = arr[j - gap];
                    stats.swaps++;
                    stats.updateDisplay();
                    
                    // 更新可視化
                    renderArray(arr, container);
                    await sleep(delay);
                }
                
                arr[j] = temp;
                stats.swaps++;
                stats.updateDisplay();
                
                // 更新可視化
                renderArray(arr, container);
                
                // 移除高亮
                bars[i].classList.remove('comparing');
                if (i-gap >= 0) bars[i-gap].classList.remove('gap');
            }
        }
        
        return arr;
    },
    
    // 猴子排序 (Bogo Sort)
    async bogoSort(arr, container, stats) {
        function isSorted(arr) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i-1] > arr[i]) {
                    return false;
                }
            }
            return true;
        }
        
        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        
        while (!isSorted(arr) && stats.sorting) {
            stats.attempts++;
            stats.updateDisplay();
            
            // 高亮我們正在嘗試新的洗牌
            const bars = container.querySelectorAll('.array-bar');
            bars.forEach(bar => bar.classList.add('comparing'));
            
            // 可視化等待
            await sleep(delay/2);
            
            shuffle(arr);
            renderArray(arr, container);
            
            // 可視化等待
            await sleep(delay/2);
            
            // 移除高亮
            bars.forEach(bar => bar.classList.remove('comparing'));
            
            if (isSorted(arr)) {
                return arr;
            }
        }
        
        return arr;
    }
};
/************************************************/
// 左面板排序控制
async function startLeftSort() {
  if (leftSorting) return;
  /************************************************/
  leftSorting = true;
  /************************************************/
  generateBtn.disabled = true;
  leftStopBtn.disabled = false;
  /************************************************/
  const algorithm = leftAlgorithmSelect.value;
  /************************************************/
  const stats = {
        sorting: leftSorting,
        comparisons: 0,
        swaps: 0,
        attempts: 0,
        status: '排序中...',
        startTime: performance.now(),
        updateDisplay: function() {
            leftComparisonsDisplay.textContent = this.comparisons;
            leftSwapsDisplay.textContent = this.swaps;
            leftStatusDisplay.textContent = this.status;
            leftTimeDisplay.textContent = 
                `${Math.floor(performance.now() - this.startTime)} ms`;
        }
    };
    
    stats.updateDisplay();
    
    // 執行選擇的排序算法
    const sortedArray = await sortingAlgorithms[algorithm + 'Sort'](
        [...leftArray], 
        leftArrayContainer, 
        stats
    );
    
    if (leftSorting) {
        leftArray = sortedArray;
        leftSorting = false;
        generateBtn.disabled = false;
        leftStopBtn.disabled = true;
        stats.status = '排序完成!';
        stats.updateDisplay();
        
        // 高亮所有條形為已排序
        const bars = leftArrayContainer.querySelectorAll('.array-bar');
        bars.forEach(bar => bar.classList.add('sorted'));
    }
}
/************************************************/
function stopLeftSort() {
    leftSorting = false;
    generateBtn.disabled = false;
    leftStopBtn.disabled = true;
    leftStatusDisplay.textContent = '已停止';
    
    // 移除所有高亮
    const bars = leftArrayContainer.querySelectorAll('.array-bar');
    bars.forEach(bar => {
        bar.classList.remove('comparing', 'swapping', 'key', 'pivot', 'gap', 'sorted');
    });
}
/************************************************/
// 右面板排序控制
async function startRightSort() {
    if (rightSorting) return;
    
    rightSorting = true;
    generateBtn.disabled = true;
    rightStopBtn.disabled = false;
    
    const algorithm = rightAlgorithmSelect.value;
    const stats = {
        sorting: rightSorting,
        comparisons: 0,
        swaps: 0,
        attempts: 0,
        status: '排序中...',
        startTime: performance.now(),
        updateDisplay: function() {
            rightComparisonsDisplay.textContent = this.comparisons;
            rightSwapsDisplay.textContent = this.swaps;
            rightStatusDisplay.textContent = this.status;
            rightTimeDisplay.textContent = 
                `${Math.floor(performance.now() - this.startTime)} ms`;
        }
    };
    
    stats.updateDisplay();
    
    // 執行選擇的排序算法
    const sortedArray = await sortingAlgorithms[algorithm + 'Sort'](
        [...rightArray], 
        rightArrayContainer, 
        stats
    );
    
    if (rightSorting) {
        rightArray = sortedArray;
        rightSorting = false;
        generateBtn.disabled = false;
        rightStopBtn.disabled = true;
        stats.status = '排序完成!';
        stats.updateDisplay();
        
        // 高亮所有條形為已排序
        const bars = rightArrayContainer.querySelectorAll('.array-bar');
        bars.forEach(bar => bar.classList.add('sorted'));
    }
}
/************************************************/
function stopRightSort() {
    rightSorting = false;
    generateBtn.disabled = false;
    rightStopBtn.disabled = true;
    rightStatusDisplay.textContent = '已停止';
    
    // 移除所有高亮
    const bars = rightArrayContainer.querySelectorAll('.array-bar');
    bars.forEach(bar => {
        bar.classList.remove('comparing', 'swapping', 'key', 'pivot', 'gap', 'sorted');
    });
}
/************************************************/
function start() {
  startLeftSort();
  startRightSort();
}
/************************************************/
function stop() {
  stopLeftSort();
  stopRightSort();
}
/************************************************/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}