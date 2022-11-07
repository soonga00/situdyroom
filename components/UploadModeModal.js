import { View, Text, Modal, Pressable } from 'react-native';
import React from 'react';

function UploadModeModal({ visible, onClose }) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='fade'
            onRequestClose={onClose}
        >
            <Pressable>

            </Pressable>
        </Modal>
    )
}

export default UploadModeModal;