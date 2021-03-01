/*
 * Copyright 2015-2020 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormioComponent} from './form-io.component';
import {FormioBuilderComponent} from './form-io-builder.component';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {AppConfig} from './formio-config';
import {FormIoUploaderComponent} from './form-io-uploader/form-io-uploader.component';
import {FormIoS3Service} from './services/form-io-s3.service';
import {FormIoStateService} from './services/form-io-state.service';
import {DropzoneModule} from '../dropzone/dropzone.module';
import {TranslateModule} from '@ngx-translate/core';
import {DocumentModule} from '@valtimo/document';
import {FormIoDomService} from './services/form-io-dom.service';
import {FileSizeModule} from '../file-size/file-size.module';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    DropzoneModule,
    TranslateModule,
    DocumentModule,
    FileSizeModule
  ],
  declarations: [FormioComponent, FormioBuilderComponent, FormIoUploaderComponent],
  exports: [FormioComponent, FormioBuilderComponent, FormIoUploaderComponent],
  providers: [
    FormIoS3Service,
    FormIoStateService,
    FormIoDomService,
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
})

export class FormIoModule {
}
