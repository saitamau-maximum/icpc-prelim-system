use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate(caseid: u64) -> Vec<i32> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..10000 {
        ret.push(rng.gen_range(1..10001));
    }
    ret.push(0);
    ret
}

fn modelans(testcase: &Vec<i32>) -> i32 {
    let mut ret = 0;
    for x in testcase {
        if *x == 0 {
            break;
        }
        ret = ret.max(*x);
    }
    ret
}

pub fn validate(testid: u64, ans: &str) -> bool {
    let testcase = generate(testid);
    let modelans = modelans(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        let val = line.parse::<i32>();
        if val.is_err() {
            return false;
        }
        vans.push(val.unwrap());
    }
    if vans.len() != 1 {
        return false;
    }
    vans[0] == modelans
}
