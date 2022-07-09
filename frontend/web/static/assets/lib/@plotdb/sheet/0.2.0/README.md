# @plotdb/sheet

simple sheet UI in vanilla JS. Features:

 - fast, infinite scrolling.
 - small - < 20KB when minimized
 - vanilla - only optional depends on Papaparse
 - CSS-based layout - better user experience
 - size of column/row auto fit content yet still customizable
 - support frozen row/column for data, fixed row/column for custom content
 - support tsv/csv pasting (depends on Papaparse)


## Usage

install:

    npm install @plotdb/sheet


include:

    <script src="path-to/sheet.js"></script>
    <link rel="stylesheet" type="text/css" href="path-to/sheet.css"/>
    <div class="container"></div>


initialize:

    var s = new sheet({
      root: '.container',
      data: mydata = [[... ], ... /* array of arrays */]
    })


## Constructor Options

 - `root`: container element or selector.
 - `fixed`: {row, col}. default {row: 0, col: 0}
 - `frozen`: {row, col}. default {row: 0, col: 0}
 - `idx`: {row, col}. default {row: true, col: true}
 - `size`: {row, col}. force cell size, in array by order.
   - default: {row: [], col: []}
 - `class`: {row, col}. additional cell class name, in array by order, as space separated string.
   - default: {row: [], col: []}
 - `editing`: false to disable editing. default true.
   - (TBD) in the future we should be able to:
     - set edit permission ( e.g., edit, comment )
     - apply on range
 - `scrollLock`: default true. prevent from horizontal scrolling of document.body if true.
   - this affects how user interact with sheet with scrolling gestures. check src comment for more information.
 - `data`: initial data, as array of arrays

## API

 - `set({row, col, data, range})`: set cell data to `data` for cell(s) in row `row` and col `col`.
   - update a range based on 2D array `data` when `range` is true.
 - `goto({row, col})`: set grid view starting from coordinate {row, col}
 - `render()`: force to re-render visible cells
 - `editing(v)`: set edit status to v, or return edit status if v is not provided.
 - `data(d)`: replace data completely with `d` and re-render.
   - return current data if `d` is omitted.
   - `d` is in the same format with the constructor `data` option
 - `size({row, col})`: update grid size.


## Event

use `sheet.on('event-name', callback)` to handle sheet related events, e.g.,

    s = new sheet( ... );
    s.on('change', function({row, col, data, range}) {
      ....
    });


Following are a list of possible events:

 - `change`: fired when some cells are updated. callback function with following options, in object:
   - `row`: base row of the updated cell
   - `col`: base col of the updated cell
   - `data`: data used to update. If it's a 2D array and `range` is true, then cells are updated with values in `data` correspondingly relative to `row` and `col` as the original cell
   - `range`: true if a range of cells are updated.

## Rich Text

You can add more than texts in the grid of the sheet, by having an object with following structure in data:

    {
      type: "data-type",
      ... /* members according to type */
    }

Currently, only `node` type is supported:

    { type: "dom", node: SomeElement }


# Swipe Back Issue

On Chrome in Mac, scrolling left with trackpad with two finger gesture may also triggers swipe back action, which navigate the page back in browsing history. This happens in all websites needing similar actions, including Airtable and Google Spreadsheet.

This may be temporarily solved by setting `overscroll-behavior` to `contain` of the sheet container, however - if swipe back happens once anywhere outside the sheet container, it then always triggered even in sheet container.

If this happens, try setting `overscroll-behavior` to `contain` directly on `body` to see if it may solve this issue.

Reference:

 - https://bugs.chromium.org/p/chromium/issues/detail?id=889846
 - https://bugs.chromium.org/p/chromium/issues/detail?id=862693
 - https://bugs.chromium.org/p/chromium/issues/detail?id=906886
 - https://community.airtable.com/t/3074



## License

MIT
