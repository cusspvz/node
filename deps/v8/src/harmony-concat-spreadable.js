// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function(global, utils) {

'use strict';

%CheckIsBootstrapping();

var isConcatSpreadableSymbol =
    utils.ImportNow("is_concat_spreadable_symbol");

utils.InstallConstants(global.Symbol, [
  // TODO(littledan): Move to symbol.js when shipping
  "isConcatSpreadable", isConcatSpreadableSymbol
]);

})
