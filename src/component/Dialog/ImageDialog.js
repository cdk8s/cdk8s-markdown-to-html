import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Icon, message, Modal, Upload} from 'antd';
import {UPLOAD_API} from '../../utils/constant';
import axios from 'axios';

const {Dragger} = Upload;

@inject('dialog')
@inject('content')
@observer
class ImageDialog extends Component {
    constructor(props) {
        super(props);
        this.images = [];
    }

    // 确认后将内容更新到编辑器上
    handleOk = e => {
        let text = '';
        // 成功后添加url
        this.images.forEach(value => {
            text += `![${value.filename}](${value.url})\n`;
        });
        this.images = [];
        const {markdownEditor} = this.props.content;
        const cursor = markdownEditor.getCursor();
        markdownEditor.replaceSelection(text, cursor);
        // 上传后实时更新内容
        const content = markdownEditor.getValue();
        this.props.content.setContent(content);

        this.props.dialog.setImageOpen(false);
    };

    handleCancel = e => {
        this.props.dialog.setImageOpen(false);
    };

    customRequest = ({action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials}) => {
        const formData = new FormData();
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
        }
        formData.append('files', file);
        axios
            .post(action, formData, {
                withCredentials,
                headers,
                onUploadProgress: ({total, loaded}) => {
                    onProgress(
                        {
                            percent: parseInt(Math.round((loaded / total) * 100).toFixed(2))
                        },
                        file
                    );
                }
            })
            .then(({data: response}) => {
                if (response && response.isSuccess === true) {
                    this.images.push({
                        url: response.data[0],
                        filename: file.name
                    });
                    onSuccess(response, file);
                }
            })
            .catch(err => {
                message.error(err.response.data.msg);
                onError()
            });
        return {
            abort() {
                console.log('upload progress is aborted.');
            }
        };
    };

    render() {
        return (
            <Modal
                title="本地上传"
                okText="确认"
                cancelText="取消"
                visible={this.props.dialog.isImageOpen}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Dragger
                    name="file"
                    multiple={true}
                    action={UPLOAD_API}
                    customRequest={this.customRequest}
                >
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">点击或拖拽一张或多张照片上传</p>
                </Dragger>
            </Modal>
        );
    }
}

export default ImageDialog;
