//import { Contract } from '@algorandfoundation/tealscript';
import { Contract } from '../../../../GitHub/algorandfoundation/TEALScript/src/lib/index';

class Demo extends Contract {
	/**
	 * OpUp
	 * Deploy and destroy a small application to generate more opcode budget
	 */
	private opup(): void {
		sendAppCall({
			onCompletion: OnCompletion.DeleteApplication,
			approvalProgram: hex('0a8101'),
			clearStateProgram: hex('0a8101')
		});
	}

	/**
	 * 
	 * @param message Text data to be verified
	 * @param signature 64-byte ed25519 signature of the message
	 * @param pubkey 32-byte public key to verify
	 * @returns True or false
	 */
	verify(message: bytes, signature: bytes64, pubkey: bytes32): boolean {
		// Add 700 * 3 = 2,100 opcode budget
		this.opup();
		this.opup();
		this.opup();

		// Perform the ed25519 verification (requiring
		// 1,900 opcode budget) and return the result
		return ed25519verify_bare(message, signature, pubkey);
	}
}
