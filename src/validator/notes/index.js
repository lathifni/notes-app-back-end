const InvariantError = require("../../exeptions/InvariantError")
const { NotePayloadSchema } = require("./schema")

const NotesValidator = {
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validateNotePayload(payload)
        if (validationResult.error){
            throw new InvariantError(validationResult.error.message)
        }
    }
}

module.exports = NotesValidator