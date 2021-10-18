/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { exportModule } from '../exportModule';

/** @whatsapp 2.2140.7:88300 */
export declare enum SendMsgResult {
  OK = 'OK',
  ERROR_NETWORK = 'ERROR_NETWORK',
  ERROR_EXPIRED = 'ERROR_EXPIRED',
  ERROR_CANCELLED = 'ERROR_CANCELLED',
  ERROR_UPLOAD = 'ERROR_UPLOAD',
  ERROR_UNKNOWN = 'ERROR_UNKNOWN',
}

exportModule(
  exports,
  {
    SendMsgResult: 'SendMsgResult',
  },
  (m) => m.SendMsgResult
);
